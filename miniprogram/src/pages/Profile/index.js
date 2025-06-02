import React, { useState, useEffect } from 'react';
import { trainingApi } from '../../api/api';
import './index.css';

const Profile = () => {
  const [runningRecords, setRunningRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRunningRecords();
  }, []);

  const fetchRunningRecords = async () => {
    try {
      setLoading(true);
      // 假设当前用户ID为1，实际使用时应该从用户状态或登录信息中获取
      const response = await trainingApi.getRunningRecords('1');
      if (response.code === 200 && response.data) {
        setRunningRecords(response.data);
      } else {
        setError('获取跑步记录失败');
      }
    } catch (err) {
      setError('获取跑步记录时发生错误');
      console.error('Error fetching running records:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="profile-container">
      <h2>我的跑步记录</h2>
      <div className="running-records">
        {runningRecords.length > 0 ? (
          runningRecords.map((record) => (
            <div key={record.id} className="record-card">
              <div className="record-header">
                <span className="workout-type">{record.workout_type}</span>
                <span className="date">{new Date(record.start_time).toLocaleDateString()}</span>
              </div>
              <div className="record-details">
                <div className="detail-item">
                  <label>距离:</label>
                  <span>{record.distance}km</span>
                </div>
                <div className="detail-item">
                  <label>时长:</label>
                  <span>{record.duration}分钟</span>
                </div>
                <div className="detail-item">
                  <label>平均配速:</label>
                  <span>{record.avg_pace}分钟/公里</span>
                </div>
                <div className="detail-item">
                  <label>消耗卡路里:</label>
                  <span>{record.calories}千卡</span>
                </div>
              </div>
              <div className="record-footer">
                <div className="weather-info">
                  <span>天气: {record.weather}</span>
                  <span>温度: {record.temperature}°C</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-records">暂无跑步记录</div>
        )}
      </div>
    </div>
  );
};

export default Profile; 