import time
import logging
from mysql.connector import pooling, Error as DBError
from mysql.connector.pooling import MySQLConnectionPool
from config import DB_CONFIG, POOL_CONFIG, DB_RETRY_CONFIG

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DatabaseManager:
    _instance = None
    _pool = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DatabaseManager, cls).__new__(cls)
        return cls._instance

    def __init__(self):
        if self._pool is None:
            self._initialize_pool()

    def _initialize_pool(self):
        """初始化数据库连接池"""
        try:
            self._pool = MySQLConnectionPool(
                pool_name=POOL_CONFIG['pool_name'],
                pool_size=POOL_CONFIG['pool_size'],
                pool_reset_session=POOL_CONFIG['pool_reset_session'],
                **DB_CONFIG
            )
            logger.info("数据库连接池初始化成功")
        except Exception as e:
            logger.error(f"数据库连接池初始化失败: {str(e)}")
            raise

    def get_connection(self):
        """获取数据库连接"""
        retries = 0
        while retries < DB_RETRY_CONFIG['max_retries']:
            try:
                connection = self._pool.get_connection()
                return connection
            except DBError as e:
                retries += 1
                if retries == DB_RETRY_CONFIG['max_retries']:
                    logger.error(f"获取数据库连接失败: {str(e)}")
                    raise
                time.sleep(DB_RETRY_CONFIG['retry_delay'])
                logger.warning(f"重试获取数据库连接 ({retries}/{DB_RETRY_CONFIG['max_retries']})")

    def execute_query(self, query, params=None):
        """执行查询"""
        connection = None
        cursor = None
        try:
            connection = self.get_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute(query, params or ())
            return cursor.fetchall()
        except Exception as e:
            logger.error(f"查询执行失败: {str(e)}")
            raise
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

    def execute_transaction(self, queries):
        """执行事务"""
        connection = None
        cursor = None
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            connection.start_transaction()
            
            for query, params in queries:
                cursor.execute(query, params or ())
            
            connection.commit()
            return True
        except Exception as e:
            if connection:
                connection.rollback()
            logger.error(f"事务执行失败: {str(e)}")
            raise
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

    def close_pool(self):
        """关闭连接池"""
        if self._pool:
            self._pool.close()
            logger.info("数据库连接池已关闭") 