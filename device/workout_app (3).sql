-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2025-06-10 04:24:49
-- 服务器版本： 8.4.0
-- PHP 版本： 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `workout_app`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `admin_users`
--

INSERT INTO `admin_users` (`id`, `username`, `password`, `email`, `created_at`, `updated_at`) VALUES
(1, 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin@example.com', '2025-06-02 21:29:15', '2025-06-02 21:30:03');

-- --------------------------------------------------------

--
-- 表的结构 `devices`
--

CREATE TABLE `devices` (
  `id` int NOT NULL,
  `device_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '设备ID',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '设备密码',
  `user_id` int DEFAULT NULL COMMENT '绑定的用户ID',
  `status` tinyint DEFAULT '0' COMMENT '绑定状态：0-未绑定，1-已绑定',
  `bind_time` timestamp NULL DEFAULT NULL COMMENT '绑定时间',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 表的结构 `physical_stats`
--

CREATE TABLE `physical_stats` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `avg_heart_rate` int DEFAULT NULL,
  `current_heart_rate` int DEFAULT NULL,
  `resting_heart_rate` int DEFAULT NULL,
  `max_heart_rate` int DEFAULT NULL,
  `current_step_rate` int DEFAULT NULL,
  `avg_step_rate` int DEFAULT NULL,
  `avg_blood_oxygen` decimal(4,1) DEFAULT NULL,
  `current_pace` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `health_index` int DEFAULT NULL COMMENT '健康指数(0-100)',
  `stress_index` int DEFAULT NULL COMMENT '压力指数(0-100)',
  `sleep_quality` int DEFAULT NULL COMMENT '睡眠质量分数(0-100)',
  `sleep_duration` int DEFAULT NULL COMMENT '睡眠时长(分钟)',
  `aerobic_capacity` int DEFAULT NULL COMMENT '有氧能力评估(0-100)',
  `weekly_distance` decimal(5,2) DEFAULT NULL COMMENT '本周跑量(km)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `physical_stats`
--

INSERT INTO `physical_stats` (`id`, `user_id`, `date`, `avg_heart_rate`, `current_heart_rate`, `resting_heart_rate`, `max_heart_rate`, `current_step_rate`, `avg_step_rate`, `avg_blood_oxygen`, `current_pace`, `health_index`, `stress_index`, `sleep_quality`, `sleep_duration`, `aerobic_capacity`, `weekly_distance`) VALUES
(241, 7, '2025-05-29', 60, 54, 51, 160, 166, 169, 96.0, '7\'52\"', 65, 26, 94, 417, 73, 21.15),
(242, 8, '2025-05-29', 64, 70, 54, 154, 170, 171, 97.8, '7\'31\"', 74, 18, 94, 481, 76, 9.61);

-- --------------------------------------------------------

--
-- 表的结构 `progress_goals`
--

CREATE TABLE `progress_goals` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '目标标题',
  `current_value` decimal(8,2) DEFAULT NULL COMMENT '当前值',
  `target_value` decimal(8,2) DEFAULT NULL COMMENT '目标值',
  `category` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '目标类别',
  `deadline` date DEFAULT NULL COMMENT '截止日期',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `progress_goals`
--

INSERT INTO `progress_goals` (`id`, `user_id`, `title`, `current_value`, `target_value`, `category`, `deadline`, `created_at`) VALUES
(14, 7, '月跑量目标', 29.74, 48.00, '距离', '2025-06-28', '2025-05-29 12:18:12'),
(15, 8, '月跑量目标', 30.35, 48.00, '距离', '2025-06-28', '2025-05-29 12:18:12');

-- --------------------------------------------------------

--
-- 表的结构 `running_records`
--

CREATE TABLE `running_records` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `workout_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '训练类型（跑步/力量/...）',
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `duration` int DEFAULT NULL COMMENT '持续时间(秒)',
  `distance` decimal(6,2) DEFAULT NULL COMMENT '距离(米)',
  `avg_pace` int DEFAULT NULL COMMENT '平均配速(秒/公里)',
  `best_pace` int DEFAULT NULL COMMENT '最佳配速(秒/公里)',
  `avg_heart_rate` int DEFAULT NULL COMMENT '平均心率',
  `max_heart_rate` int DEFAULT NULL COMMENT '最大心率',
  `avg_step_rate` int DEFAULT NULL COMMENT '平均步频',
  `calories` int DEFAULT NULL COMMENT '消耗卡路里',
  `elevation_gain` decimal(6,2) DEFAULT NULL COMMENT '累计爬升(米)',
  `weather` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '天气情况',
  `temperature` decimal(4,1) DEFAULT NULL COMMENT '温度',
  `notes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '备注内容'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `running_records`
--

INSERT INTO `running_records` (`id`, `user_id`, `workout_type`, `start_time`, `end_time`, `duration`, `distance`, `avg_pace`, `best_pace`, `avg_heart_rate`, `max_heart_rate`, `avg_step_rate`, `calories`, `elevation_gain`, `weather`, `temperature`, `notes`) VALUES
(84, 7, '恢复跑', '2025-05-23 11:50:12', '2025-05-23 12:21:10', 1858, 3332.83, 557, 535, 112, 142, 165, 223, 6.23, '阴天', 24.2, '今天的恢复跑训练，感觉很棒！'),
(85, 7, '跑步', '2025-05-19 05:32:12', '2025-05-19 06:06:34', 2062, 4807.50, 429, 402, 128, 157, 164, 322, 36.87, '小雨', 22.8, '今天的跑步训练，感觉很棒！'),
(86, 7, '恢复跑', '2025-05-26 04:50:12', '2025-05-26 05:20:03', 1791, 3212.07, 557, 537, 111, 139, 180, 215, 9.23, '多云', 19.9, '今天的恢复跑训练，感觉很棒！'),
(87, 7, '长距离跑', '2025-05-14 09:12:12', '2025-05-14 10:08:56', 3404, 6612.28, 514, 485, 117, 142, 166, 443, 17.95, '晴朗', 27.6, '今天的长距离跑训练，感觉一般！'),
(88, 7, '节奏跑', '2025-05-10 02:50:12', '2025-05-10 03:21:24', 1872, 4850.41, 386, 357, 132, 160, 173, 324, 27.16, '小雨', 28.4, '今天的节奏跑训练，感觉很棒！'),
(89, 7, '跑步', '2025-05-01 12:33:12', '2025-05-01 13:19:31', 2779, 6479.70, 429, 407, 138, 160, 179, 434, 29.51, '多云', 20.0, '今天的跑步训练，感觉一般！'),
(90, 8, '间歇跑', '2025-05-15 13:13:12', '2025-05-15 13:30:11', 1019, 2971.06, 343, 304, 115, 137, 165, 207, 24.12, '小雨', 21.2, '今天的间歇跑训练，感觉一般！'),
(91, 8, '跑步', '2025-05-07 06:20:12', '2025-05-07 07:00:49', 2437, 5682.76, 429, 409, 117, 147, 169, 397, 20.01, '小雨', 15.3, '今天的跑步训练，感觉一般！'),
(92, 8, '跑步', '2025-05-11 13:59:12', '2025-05-11 14:32:50', 2018, 4705.06, 429, 396, 136, 160, 168, 329, 28.12, '微风', 25.4, '今天的跑步训练，感觉很棒！'),
(93, 8, '长距离跑', '2025-05-22 05:14:12', '2025-05-22 06:25:05', 4253, 8262.05, 514, 482, 111, 132, 161, 578, 1.05, '晴朗', 24.2, '今天的长距离跑训练，感觉一般！'),
(94, 8, '跑步', '2025-05-19 00:57:12', '2025-05-19 01:30:20', 1988, 4634.68, 429, 411, 128, 148, 166, 324, 28.41, '晴朗', 22.6, '今天的跑步训练，感觉很棒！'),
(95, 8, '间歇跑', '2025-05-26 05:12:12', '2025-05-26 05:29:27', 1035, 3015.90, 343, 311, 120, 142, 176, 211, 7.09, '晴朗', 29.1, '今天的间歇跑训练，感觉一般！'),
(96, 8, '恢复跑', '2025-05-05 06:35:12', '2025-05-05 07:06:40', 1888, 3385.35, 557, 518, 133, 160, 171, 236, 28.70, '晴朗', 26.4, '今天的恢复跑训练，感觉一般！'),
(99, 51, '跑步', NULL, NULL, 1800, 5.00, 360, NULL, NULL, NULL, NULL, 350, NULL, NULL, NULL, ''),
(100, 52, '跑步', '2025-06-03 05:17:34', NULL, 1800, 5000.00, 360, NULL, 128, 152, NULL, 350, NULL, NULL, NULL, '测试上传的运动记录'),
(101, 53, '跑步', '2025-06-03 05:18:08', NULL, 1800, 5000.00, 360, NULL, 128, 152, NULL, 350, NULL, NULL, NULL, '测试上传的运动记录');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `openid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `gender` tinyint DEFAULT NULL COMMENT '0:未知, 1:男, 2:女',
  `age` int DEFAULT NULL,
  `height` decimal(5,2) DEFAULT NULL COMMENT '身高(cm)',
  `weight` decimal(5,2) DEFAULT NULL COMMENT '体重(kg)',
  `level` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '跑步水平:beginner/intermediate/advanced',
  `total_workouts` int DEFAULT '0',
  `total_duration` int DEFAULT '0' COMMENT '总运动时长(分钟)',
  `total_distance` decimal(10,2) DEFAULT '0.00' COMMENT '总运动距离(km)',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `openid`, `username`, `gender`, `age`, `height`, `weight`, `level`, `total_workouts`, `total_duration`, `total_distance`, `created_at`, `updated_at`, `password`, `email`) VALUES
(7, NULL, 'pla', 1, 14, 170.00, 76.00, 'beginner', 6, 229, 29.29, '2025-05-29 08:13:59', '2025-05-29 12:18:11', '56c55081a29abfb74d66237a74c192af73b39f549076c0a4f2ae68d13c8dce95', NULL),
(8, NULL, 'cxyyy', 1, 20, 180.00, 65.00, 'beginner', 7, 243, 32.66, '2025-05-29 08:31:23', '2025-05-29 12:18:11', '9903ad821163618f28c98eb90baf19adcf07ae3972796e8428f5dea4cde2f478', NULL),
(9, NULL, 'testuser', NULL, NULL, NULL, NULL, 'beginner', 0, 0, 0.00, '2025-06-02 18:41:39', '2025-06-02 18:41:39', '7e6e0c3079a08c5cc6036789b57e951f65f82383913ba1a49ae992544f1b4b6e', NULL),
(22, NULL, 'testuser_uawwx', NULL, NULL, NULL, NULL, 'beginner', 0, 0, 0.00, '2025-06-02 19:01:17', '2025-06-02 19:01:17', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', NULL),
(51, NULL, 'test_user_1748895678', 1, 30, 175.00, 70.00, 'beginner', 1, 30, 0.01, '2025-06-02 20:21:22', '2025-06-02 20:21:31', 'b55c8792d1ce458e279308835f8a97b580263503e76e1998e279703e35ad0c2e', 'test@example.com'),
(52, NULL, 'test_user_1748899047', 1, 25, 175.50, 70.00, 'beginner', 1, 30, 5.00, '2025-06-02 21:17:29', '2025-06-02 21:17:36', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', 'test_user_1748899047@example.com'),
(53, NULL, 'test_user_1748899081', 1, 25, 175.50, 70.00, 'beginner', 1, 30, 5.00, '2025-06-02 21:18:03', '2025-06-02 21:18:10', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', 'test_user_1748899081@example.com');

--
-- 转储表的索引
--

--
-- 表的索引 `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

-- 修改 running_records 表
ALTER TABLE `running_records` 
  ADD PRIMARY KEY (`id`),
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

-- 修改 physical_stats 表
ALTER TABLE `physical_stats` 
  ADD PRIMARY KEY (`id`),
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

-- 修改 progress_goals 表
ALTER TABLE `progress_goals` 
  ADD PRIMARY KEY (`id`),
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

-- 修改 devices 表
ALTER TABLE `devices` 
  ADD PRIMARY KEY (`id`),
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

-- 刷新权限
FLUSH PRIVILEGES;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
