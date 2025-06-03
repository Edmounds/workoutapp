#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
MongoDB批量数据上传测试脚本
"""

import pymongo
import datetime
import random
from bson.objectid import ObjectId

# MongoDB连接信息
MONGO_URI = "mongodb://113.45.220.0:27017/"
MONGO_DB_NAME = "workout_app"
TEST_COLLECTION = "upload_test"

def generate_test_data(count=10):
    """生成测试数据"""
    test_data = []
    for i in range(count):
        data = {
            "test_id": str(ObjectId()),
            "timestamp": datetime.datetime.now() - datetime.timedelta(hours=i),
            "index": i,
            "random_value": random.randint(1, 1000),
            "name": f"测试数据-{i}",
            "is_valid": random.choice([True, False]),
            "metrics": {
                "heart_rate": random.randint(60, 120),
                "steps": random.randint(1000, 10000),
                "calories": random.randint(100, 500)
            },
            "tags": random.sample(["运动", "健康", "跑步", "步行", "骑行", "游泳"], 2)
        }
        test_data.append(data)
    return test_data

def main():
    """主函数"""
    print("=== 🍃 MongoDB批量数据上传测试 ===")
    
    try:
        # 连接MongoDB
        print("尝试连接MongoDB...")
        client = pymongo.MongoClient(MONGO_URI)
        db = client[MONGO_DB_NAME]
        
        # 验证连接
        client.server_info()
        print(f"✅ 成功连接到MongoDB: {MONGO_URI}")
        
        # 创建测试集合
        test_collection = db[TEST_COLLECTION]
        
        # 生成测试数据
        data_count = 20
        print(f"生成{data_count}条测试数据...")
        test_data = generate_test_data(data_count)
        
        # 插入测试数据
        print("尝试批量插入测试数据...")
        result = test_collection.insert_many(test_data)
        
        if result.inserted_ids:
            print(f"✅ 成功插入{len(result.inserted_ids)}条数据")
            
            # 查询验证
            count = test_collection.count_documents({})
            print(f"✅ 集合中共有{count}条数据")
            
            # 查询部分数据
            print("\n📋 插入的部分数据示例:")
            for doc in test_collection.find().limit(3):
                print(f"  - {doc['name']}: 心率={doc['metrics']['heart_rate']}, 步数={doc['metrics']['steps']}")
            
            # 清理测试数据
            test_collection.delete_many({"test_id": {"$in": [d["test_id"] for d in test_data]}})
            print(f"✅ 测试数据已清理")
        
        # 关闭连接
        client.close()
        print("✅ MongoDB批量数据上传测试通过")
        
    except Exception as e:
        print(f"❌ 测试失败: {e}")
        print("❌ MongoDB批量数据上传测试失败")
    
    print("=== 测试完成 ===")

if __name__ == "__main__":
    main() 