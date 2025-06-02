import os
import json
import requests
import mysql.connector
from dotenv import load_dotenv
from datetime import datetime, timedelta

class DeepSeekFitnessAdvisor:
    def __init__(self):
        load_dotenv()  # 加载环境变量
        self.api_key = os.getenv('DEEPSEEK_API_KEY')
        self.api_url = "https://api.deepseek.com/v1/chat/completions"  # 请根据实际的API端点修改
        
        # 数据库连接配置
        self.db_config = {
            'host': '113.45.220.0',
            'port': 3306,
            'user': 'cxr',
            'password': 'Chenqichen666',
            'database': 'workout_app'
        }
        
    def get_running_data_from_db(self, user_id):
        """
        从数据库获取跑步数据
        
        Args:
            user_id: 用户ID
            
        Returns:
            dict: 包含跑步数据的字典
        """
        try:
            # 建立数据库连接
            conn = mysql.connector.connect(**self.db_config)
            cursor = conn.cursor(dictionary=True)
            
            # 获取今日日期
            today = datetime.now().date()
            
            # 查询每日跑步距离和心率数据
            daily_query = """
                SELECT 
                    AVG(distance) as daily_distance,
                    MAX(max_heart_rate) as max_heart_rate,
                    AVG(avg_heart_rate) as avg_heart_rate
                FROM running_records 
                WHERE id = %s 
                AND DATE(start_time) = %s
            """
            cursor.execute(daily_query, (user_id, today))
            daily_data = cursor.fetchone()
            
            # 查询每周跑步距离
            weekly_query = """
                SELECT weekly_distance
                FROM physical_stats
                WHERE id = %s
                LIMIT 1
            """
            cursor.execute(weekly_query, (user_id,))
            weekly_data = cursor.fetchone()
            
            # 整合数据
            running_data = {
                "daily_distance": daily_data['daily_distance'] if daily_data['daily_distance'] else 0,
                "weekly_distance": weekly_data['weekly_distance'] if weekly_data else 0,
                "max_heart_rate": daily_data['max_heart_rate'] if daily_data['max_heart_rate'] else 0,
                "avg_heart_rate": daily_data['avg_heart_rate'] if daily_data['avg_heart_rate'] else 0
            }
            
            return running_data
            
        except mysql.connector.Error as err:
            print(f"数据库错误: {err}")
            return None
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'conn' in locals():
                conn.close()
        
    def get_fitness_advice(self, user_id):
        """
        根据用户ID获取健身建议
        
        Args:
            user_id: 用户ID
        
        Returns:
            dict: 包含营养建议和训练计划的响应
        """
        # 从数据库获取跑步数据
        running_data = self.get_running_data_from_db(user_id)
        if not running_data:
            return {"error": "无法获取跑步数据"}
            
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        
        # 构建提示词
        prompt = f"""作为一个专业的跑步教练和营养师，请根据以下跑步数据提供详细的建议：

跑步数据：
- 每日平均跑步距离：{running_data['daily_distance']}公里
- 每周总跑步距离：{running_data['weekly_distance']}公里
- 最大心率：{running_data['max_heart_rate']}次/分钟
- 平均心率：{running_data['avg_heart_rate']}次/分钟

请提供：
1. 详细的营养摄入建议（包括每日所需热量、蛋白质、碳水化合物和脂肪的摄入量）
2. 针对性的训练计划建议（包括强度分配、恢复建议等）
3. 如何根据当前数据优化训练效果

请用中文回答，并确保建议具体且可执行。"""

        data = {
            "model": "deepseek-chat",  # 请根据实际使用的模型名称修改
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7
        }
        
        try:
            response = requests.post(self.api_url, headers=headers, json=data)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"API调用出错: {str(e)}")
            return None

def main():
    # 示例使用
    advisor = DeepSeekFitnessAdvisor()
    
    # 假设用户ID为1
    user_id = 1
    
    # 获取建议
    advice = advisor.get_fitness_advice(user_id)
    if advice:
        print(json.dumps(advice, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main() 