// app.js
const deepseek = require('./utils/deepseek.js');

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 设置默认的DeepSeek API密钥（如果用户之前已设置，则使用用户设置的）
    const apiKey = wx.getStorageSync('deepseek_api_key');
    if (!apiKey) {
      deepseek.setApiKey('sk-2aee504fdb5e4c3f84205c1f398b801b');
    }

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
