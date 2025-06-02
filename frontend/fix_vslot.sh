#!/bin/bash

# 修复 v-slot 问题的脚本
# 将 v-slot:* 替换为 #*

# 指定要修改的文件
files=(
    "/home/cqc/Coding/Vue_frontend/cxr_frontend/src/views/UserStats.vue"
    "/home/cqc/Coding/Vue_frontend/cxr_frontend/src/views/WorkoutRecords.vue"
)

# 替换每个文件中的 v-slot:xxx 为 #xxx
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "正在修复文件: $file"
        sed -i 's/v-slot:/\#/g' "$file"
        echo "已完成: $file"
    else
        echo "错误: 文件 $file 不存在"
    fi
done

echo "v-slot 修复完成!"
