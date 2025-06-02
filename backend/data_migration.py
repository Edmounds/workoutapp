import pymongo
import mysql.connector
from mysql.connector import pooling
from config import DB_CONFIG, POOL_CONFIG
import logging
from datetime import datetime
from collections import defaultdict

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DataMigration:
    def __init__(self):
        # MongoDB连接
        self.mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")
        self.mongo_db = self.mongo_client["your_mongodb_database"]
        
        # MySQL连接池
        self.mysql_pool = mysql.connector.pooling.MySQLConnectionPool(
            pool_name=POOL_CONFIG['pool_name'],
            pool_size=POOL_CONFIG['pool_size'],
            **DB_CONFIG
        )

    def preprocess_workout_data(self):
        """预处理训练数据，计算统计信息"""
        try:
            # 使用MongoDB的聚合管道计算每个用户的训练统计信息
            pipeline = [
                {
                    "$group": {
                        "_id": "$user_id",
                        "avg_duration": {"$avg": "$duration"},
                        "total_calories": {"$sum": "$calories"},
                        "workout_count": {"$sum": 1},
                        "workout_types": {"$addToSet": "$workout_type"},
                        "last_workout": {"$max": "$created_at"}
                    }
                }
            ]
            
            workout_stats = list(self.mongo_db.workouts.aggregate(pipeline))
            logger.info(f"Processed workout statistics for {len(workout_stats)} users")
            return workout_stats
            
        except Exception as e:
            logger.error(f"Error preprocessing workout data: {str(e)}")
            raise

    def preprocess_user_data(self):
        """预处理用户数据"""
        try:
            # 获取所有用户数据
            users = list(self.mongo_db.users.find())
            
            # 处理用户数据
            processed_users = []
            for user in users:
                processed_user = {
                    'user_id': str(user['_id']),
                    'username': user.get('username', ''),
                    'created_at': user.get('created_at', datetime.now()),
                    'updated_at': user.get('updated_at', datetime.now()),
                    # 可以添加其他需要的用户数据处理
                }
                processed_users.append(processed_user)
            
            logger.info(f"Processed {len(processed_users)} users")
            return processed_users
            
        except Exception as e:
            logger.error(f"Error preprocessing user data: {str(e)}")
            raise

    def migrate_data(self):
        """从MongoDB迁移预处理后的数据到MySQL"""
        conn = self.mysql_pool.get_connection()
        cursor = conn.cursor()
        
        try:
            # 预处理数据
            processed_users = self.preprocess_user_data()
            workout_stats = self.preprocess_workout_data()
            
            # 迁移预处理后的用户数据
            for user in processed_users:
                cursor.execute("""
                    INSERT IGNORE INTO users (user_id, username, created_at, updated_at)
                    VALUES (%s, %s, %s, %s)
                """, (
                    user['user_id'],
                    user['username'],
                    user['created_at'],
                    user['updated_at']
                ))
            
            # 迁移预处理后的训练统计数据
            for stat in workout_stats:
                cursor.execute("""
                    INSERT INTO workout_stats 
                    (user_id, avg_duration, total_calories, workout_count, workout_types, last_workout)
                    VALUES (%s, %s, %s, %s, %s, %s)
                """, (
                    stat['_id'],
                    stat['avg_duration'],
                    stat['total_calories'],
                    stat['workout_count'],
                    ','.join(stat['workout_types']),
                    stat['last_workout']
                ))
            
            conn.commit()
            logger.info("Data migration completed successfully")
            
        except Exception as e:
            logger.error(f"Error during data migration: {str(e)}")
            conn.rollback()
            raise
        finally:
            cursor.close()
            conn.close()

    def close_connections(self):
        """关闭所有数据库连接"""
        self.mongo_client.close()
        self.mysql_pool.close()

if __name__ == "__main__":
    migration = DataMigration()
    try:
        migration.migrate_data()
    finally:
        migration.close_connections() 