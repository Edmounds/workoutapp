# API汇总

共有**42个API**，按照模块分类如下：

## 用户相关API (4个)
| URL | 作用 |
|-----|------|
| `/api/users/register` | 用户注册 |
| `/api/users/login` | 用户登录 |
| `/api/users/all/list` | 获取用户完整信息 |
| `/api/users/update` | 更新用户信息 |

## 管理员相关API (28个)
| URL | 作用 |
|-----|------|
| `/api/admin/login` | 管理员登录 |
| `/api/admin/users` | 获取所有用户列表 |
| `/api/admin/stats/registrations` | 获取用户注册统计数据 |
| `/api/admin/stats/active_users` | 获取活跃用户统计数据 |
| `/api/admin/stats/workouts/summary` | 获取运动总量统计 |
| `/api/admin/stats/workouts/types` | 获取运动类型分布统计 |
| `/api/admin/user/{user_id}` | 获取指定用户详细信息 |
| `/api/admin/user/{user_id}` (PUT) | 管理员编辑用户信息 |
| `/api/admin/user/{user_id}` (DELETE) | 删除用户 |
| `/api/admin/user/{user_id}/running_records` | 获取用户运动记录 |
| `/api/admin/dashboard/overview` | 获取系统概况统计 |
| `/api/admin/dashboard/user_growth` | 获取用户增长趋势 |
| `/api/admin/dashboard/workout_trends` | 获取运动数据趋势 |
| `/api/admin/stats/users/age_distribution` | 获取用户年龄分布统计 |
| `/api/admin/stats/users/gender_distribution` | 获取用户性别分布统计 |
| `/api/admin/stats/physical` | 获取用户体能数据统计 |
| `/api/admin/stats/sleep` | 获取用户睡眠质量统计 |
| `/api/admin/user/{user_id}/physical_stats` | 为用户添加体能数据 |
| `/api/admin/user/{user_id}/goals` | 为用户添加进度目标 |
| `/api/admin/export/users` | 导出用户数据 |
| `/api/admin/import/users` | 导入用户数据 |
| `/api/admin/devices` | 获取所有设备列表 |
| `/api/admin/devices` (POST) | 添加新设备 |
| `/api/admin/devices/batch` | 批量添加设备 |
| `/api/admin/devices/{device_id}` | 修改设备信息 |
| `/api/admin/devices/{device_id}` (DELETE) | 删除设备 |
| `/api/admin/devices/{device_id}/reset_secret` | 重置设备密钥 |
| `/api/admin/stats/devices` | 获取设备统计数据 |

## 设备相关API (6个)
| URL | 作用 |
|-----|------|
| `/api/devices/bind` | 绑定设备 |
| `/api/devices/unbind` | 解绑设备 |
| `/api/devices/list` | 获取绑定设备列表 |
| `/api/devices/auth` | 设备认证 |
| `/api/devices/upload_data` | 设备上传数据 |
| `/api/devices/update` | 更新设备信息 |

## 体能数据相关API (1个)
| URL | 作用 |
|-----|------|
| `/api/physical/stats` | 获取体能数据 |

## 运动记录相关API (3个)
| URL | 作用 |
|-----|------|
| `/api/user/running_records` | 获取运动记录 |
| `/api/user/upload_workout` | 上传运动记录 |
