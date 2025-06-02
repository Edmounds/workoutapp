/*
 Navicat Premium Data Transfer

 Source Server         : root@localhost
 Source Server Type    : MySQL
 Source Server Version : 80041 (8.0.41)
 Source Host           : localhost:3306
 Source Schema         : workout_app

 Target Server Type    : MySQL
 Target Server Version : 80041 (8.0.41)
 File Encoding         : 65001

 Date: 27/05/2025 10:47:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ai_advice
-- ----------------------------
DROP TABLE IF EXISTS `ai_advice`;
CREATE TABLE `ai_advice`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `advice_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '建议内容',
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '类别（训练/恢复/营养等）',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `ai_advice_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ai_advice
-- ----------------------------

-- ----------------------------
-- Table structure for nutrition_tips
-- ----------------------------
DROP TABLE IF EXISTS `nutrition_tips`;
CREATE TABLE `nutrition_tips`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tip` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '提示内容',
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '类别（赛前/赛后/日常等）',
  `importance` int NULL DEFAULT NULL COMMENT '重要性排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nutrition_tips
-- ----------------------------

-- ----------------------------
-- Table structure for physical_stats
-- ----------------------------
DROP TABLE IF EXISTS `physical_stats`;
CREATE TABLE `physical_stats`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `avg_heart_rate` int NULL DEFAULT NULL,
  `current_heart_rate` int NULL DEFAULT NULL,
  `resting_heart_rate` int NULL DEFAULT NULL,
  `max_heart_rate` int NULL DEFAULT NULL,
  `current_step_rate` int NULL DEFAULT NULL,
  `avg_step_rate` int NULL DEFAULT NULL,
  `avg_blood_oxygen` decimal(4, 1) NULL DEFAULT NULL,
  `current_pace` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `health_index` int NULL DEFAULT NULL COMMENT '健康指数(0-100)',
  `stress_index` int NULL DEFAULT NULL COMMENT '压力指数(0-100)',
  `sleep_quality` int NULL DEFAULT NULL COMMENT '睡眠质量分数(0-100)',
  `sleep_duration` int NULL DEFAULT NULL COMMENT '睡眠时长(分钟)',
  `aerobic_capacity` int NULL DEFAULT NULL COMMENT '有氧能力评估(0-100)',
  `weekly_distance` decimal(5, 2) NULL DEFAULT NULL COMMENT '本周跑量(km)',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC, `date` ASC) USING BTREE,
  CONSTRAINT `physical_stats_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of physical_stats
-- ----------------------------

-- ----------------------------
-- Table structure for progress_goals
-- ----------------------------
DROP TABLE IF EXISTS `progress_goals`;
CREATE TABLE `progress_goals`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '目标标题',
  `current_value` decimal(8, 2) NULL DEFAULT NULL COMMENT '当前值',
  `target_value` decimal(8, 2) NULL DEFAULT NULL COMMENT '目标值',
  `category` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '目标类别',
  `deadline` date NULL DEFAULT NULL COMMENT '截止日期',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `progress_goals_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of progress_goals
-- ----------------------------

-- ----------------------------
-- Table structure for running_records
-- ----------------------------
DROP TABLE IF EXISTS `running_records`;
CREATE TABLE `running_records`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `workout_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '训练类型（跑步/力量/...）',
  `start_time` datetime NULL DEFAULT NULL,
  `end_time` datetime NULL DEFAULT NULL,
  `duration` int NULL DEFAULT NULL COMMENT '持续时间(秒)',
  `distance` decimal(6, 2) NULL DEFAULT NULL COMMENT '距离(米)',
  `avg_pace` int NULL DEFAULT NULL COMMENT '平均配速(秒/公里)',
  `best_pace` int NULL DEFAULT NULL COMMENT '最佳配速(秒/公里)',
  `avg_heart_rate` int NULL DEFAULT NULL COMMENT '平均心率',
  `max_heart_rate` int NULL DEFAULT NULL COMMENT '最大心率',
  `avg_step_rate` int NULL DEFAULT NULL COMMENT '平均步频',
  `calories` int NULL DEFAULT NULL COMMENT '消耗卡路里',
  `elevation_gain` decimal(6, 2) NULL DEFAULT NULL COMMENT '累计爬升(米)',
  `weather` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '天气情况',
  `temperature` decimal(4, 1) NULL DEFAULT NULL COMMENT '温度',
  `notes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '备注内容',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC, `start_time` ASC) USING BTREE,
  CONSTRAINT `running_records_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of running_records
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `openid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` tinyint NULL DEFAULT NULL COMMENT '0:未知, 1:男, 2:女',
  `age` int NULL DEFAULT NULL,
  `height` decimal(5, 2) NULL DEFAULT NULL COMMENT '身高(cm)',
  `weight` decimal(5, 2) NULL DEFAULT NULL COMMENT '体重(kg)',
  `level` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '跑步水平:beginner/intermediate/advanced',
  `total_workouts` int NULL DEFAULT 0,
  `total_duration` int NULL DEFAULT 0 COMMENT '总运动时长(分钟)',
  `total_distance` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '总运动距离(km)',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `openid`(`openid` ASC) USING BTREE,
  INDEX `openid_2`(`openid` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
