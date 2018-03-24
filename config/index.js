module.exports = {
    dev: {
    proxyTable: {
      '/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '/': 'api'
        }
      }
    },
    cssSourceMap: false
  },
  build: {
    index: path.resolve(__dirname, '../templates/index.html'),

    assetsRoot: path.resolve(__dirname, '../static'),
    assetsSubDirectory: 'build',
    assetsPublicPath: '/static/'
  }

};
