from deepseek_fitness_advisor import DeepSeekFitnessAdvisor

# 创建顾问实例
advisor = DeepSeekFitnessAdvisor()

# 使用用户ID获取建议
user_id = 1
advice = advisor.get_fitness_advice(user_id)

# 打印结果测试输出human readable
if advice:
    print(advice)