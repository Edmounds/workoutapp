const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 启用更详细的错误信息和源地图
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false
  },
  // 配置开发服务器以显示所有警告和错误
  devServer: {
    client: {
      overlay: {
        warnings: true,
        errors: true
      },
      logging: 'verbose'
    }
  }
})
