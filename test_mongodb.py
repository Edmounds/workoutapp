#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
MongoDB数据上传测试脚本
测试MongoDB连接和数据上传功能
"""

import pymongo
import datetime
from bson.objectid import ObjectId
import random

# MongoDB连接信息
MONGO_URI = "mongodb://113.45.220.0:27017/"  # 注意：IP地址可能需要修改
MONGO_DB_NAME = "workout_app"
TEST_COLLECTION = "test_collection"

def test_mongodb_connection():
    """测试MongoDB连接"""
    try:
        client = pymongo.MongoClient(MONGO_URI)
        db = client[MONGO_DB_NAME]
        # 检查连接是否成功
        client.server_info()  # 这会触发实际连接
        print(f"✅ 成功连接到MongoDB数据库: {MONGO_DB_NAME}")
        return db, client
    except Exception as e:
        print(f"❌ 连接MongoDB失败: {e}")
        return None, None

def test_data_upload(db):
    """测试数据上传功能"""
    if db is None:
        print("❌ 无法测试上传，数据库连接失败")
        return False
    
    try:
        # 创建测试集合
        test_collection = db[TEST_COLLECTION]
        
        # 生成测试数据
        test_data = {
            "test_id": str(ObjectId()),
            "name": "测试数据",
            "timestamp": datetime.datetime.now(),
            "random_value": random.randint(1, 1000),
            "test_array": [1, 2, 3, 4, 5],
            "nested_data": {
                "field1": "测试字段1",
                "field2": "测试字段2"
            }
        }
        
        # 插入测试数据
        result = test_collection.insert_one(test_data)
        
        if result.inserted_id:
            print(f"✅ 数据上传成功，文档ID: {result.inserted_id}")
            
            # 验证数据是否正确插入
            inserted_doc = test_collection.find_one({"_id": result.inserted_id})
            if inserted_doc:
                print("✅ 数据验证成功，已正确保存到MongoDB")
                print(f"📋 插入的数据: {inserted_doc}")
                
                # 清理测试数据
                test_collection.delete_one({"_id": result.inserted_id})
                print("🧹 测试数据已清理")
                return True
            else:
                print("❌ 数据验证失败，无法找到插入的文档")
                return False
        else:
            print("❌ 数据上传失败，未返回文档ID")
            return False
    
    except Exception as e:
        print(f"❌ 测试数据上传过程中出错: {e}")
        return False

def main():
    """主函数"""
    print("=== 🍃 MongoDB数据上传测试 ===")
    
    # 测试连接
    db, client = test_mongodb_connection()
    if db is None:
        print("❌ MongoDB连接测试失败，程序退出")
        return
    
    # 测试数据上传
    success = test_data_upload(db)
    
    # 关闭连接
    if client:
        client.close()
    
    # 输出最终结果
    print("\n=== 测试结果汇总 ===")
    if success:
        print("✅ MongoDB连接和数据上传测试通过")
    else:
        print("❌ MongoDB测试失败，请检查连接信息和服务器状态")
    print("=====================")

if __name__ == "__main__":
    main() 