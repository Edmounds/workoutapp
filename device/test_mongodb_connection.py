#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
MongoDB连接测试脚本
"""

import pymongo
import datetime
from bson.objectid import ObjectId

# MongoDB连接信息
MONGO_URI = "mongodb://113.45.220.0:27017/"
MONGO_DB_NAME = "workout_app"
TEST_COLLECTION = "connection_test"

def main():
    """主函数"""
    print("=== 🍃 MongoDB连接测试 ===")
    
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
        
        # 创建测试文档
        test_doc = {
            "test_id": str(ObjectId()),
            "timestamp": datetime.datetime.now(),
            "message": "这是一个连接测试"
        }
        
        # 插入测试文档
        print("尝试插入测试数据...")
        result = test_collection.insert_one(test_doc)
        
        if result.inserted_id:
            print(f"✅ 数据上传成功，文档ID: {result.inserted_id}")
            
            # 查询并验证
            inserted_doc = test_collection.find_one({"_id": result.inserted_id})
            print(f"✅ 数据验证成功: {inserted_doc}")
            
            # 删除测试文档
            test_collection.delete_one({"_id": result.inserted_id})
            print("✅ 测试数据已清理")
        
        # 关闭连接
        client.close()
        print("✅ MongoDB连接和数据上传测试通过")
        
    except Exception as e:
        print(f"❌ 测试失败: {e}")
        print("❌ MongoDB连接或数据上传测试失败")
    
    print("=== 测试完成 ===")

if __name__ == "__main__":
    main() 