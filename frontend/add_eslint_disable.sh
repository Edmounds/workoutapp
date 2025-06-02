#!/bin/bash

# 在Vue文件开头添加ESLint禁用注释
# 禁用v-slot规则

# 指定要修改的文件
files=(
    "/home/cqc/Coding/Vue_frontend/cxr_frontend/src/views/HealthMetrics.vue"
    "/home/cqc/Coding/Vue_frontend/cxr_frontend/src/views/UserStats.vue"
    "/home/cqc/Coding/Vue_frontend/cxr_frontend/src/views/WorkoutRecords.vue"
)

# 在每个文件首行添加ESLint禁用注释
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "正在修改文件: $file"
        # 使用临时文件避免同时读写
        tempfile=$(mktemp)
        echo '<!-- eslint-disable vue/valid-v-slot -->' > "$tempfile"
        cat "$file" >> "$tempfile"
        mv "$tempfile" "$file"
        echo "已完成: $file"
    else
        echo "错误: 文件 $file 不存在"
    fi
done

echo "ESLint禁用注释添加完成!"
