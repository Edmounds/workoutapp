# 待开发API列表

根据API测试结果，以下API端点尚未实现或存在问题，需要优先开发：

## 1. 训练计划相关API

| API路径 | 方法 | 描述 | 错误类型 |
|--------|------|------|---------|
| `/api/train/plan/adjust` | PUT | 调整训练计划 | 404 Not Found |
| `/api/train/goal/set` | POST | 设置运动目标 | 404 Not Found |
| `/api/train/plan/detail` | GET | 获取个性化训练计划详情 | 404 Not Found |
| `/api/train/plan/execution` | GET | 获取训练计划执行情况 | 404 Not Found |
| `/api/user_training_plans` | GET | 获取个性化训练计划 | 404 Not Found |

## 2. 健康数据相关API

| API路径 | 方法 | 描述 | 错误类型 |
|--------|------|------|---------|
| `/api/health/data/analysis` | GET | 获取健康数据分析 | 404 Not Found |
| `/api/motion/data/statistics` | GET | 获取运动数据分析统计 | 404 Not Found |

## 3. 成就与建议相关API

| API路径 | 方法 | 描述 | 错误类型 |
|--------|------|------|---------|
| `/api/user_achievements` | GET | 获取用户成就徽章列表 | 404 Not Found |
| `/api/recovery/suggestion` | GET | 获取恢复建议 | 404 Not Found |
| `/api/train/attention` | GET | 获取训练注意事项 | 404 Not Found |

## 已成功实现的API

以下API已成功实现并通过测试：

1. `POST /api/users/register` - 用户注册
2. `POST /api/users/login` - 用户登录
3. `GET /api/users/all/list` - 获取用户信息
4. `PUT /api/users/update` - 更新用户信息
5. `GET /api/user/running_records` - 获取跑步记录
6. `POST /api/user/upload_workout` - 上传运动数据
7. `GET /api/nutrition/tips` - 获取营养建议
8. `GET /api/physical/stats` - 获取体能数据

## 开发优先级建议

1. **高优先级**：
   - 训练计划相关API（对用户体验影响较大）
   - 健康数据分析API（提供核心功能）

2. **中优先级**：
   - 成就系统API（提高用户参与度）
   - 恢复建议API（提升用户体验）

3. **低优先级**：
   - 训练注意事项API（辅助功能）

## 后端开发计划

1. 创建必要的数据库表结构
2. 实现训练计划管理模块
3. 实现健康数据分析模块
4. 实现成就系统模块
5. 实现恢复建议和训练注意事项模块

每个API实现后，应立即运行测试验证其功能是否符合预期。 