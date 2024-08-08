// module.exports = {
//     devServer: {
//         client: {
//             overlay: false
//         }
//     }
// }

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: '@/src',
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.102/Workflow',
        changeOrigin: true,
        pathRewrite: { '^/api': 'api' },
      },
    },
  },
}
