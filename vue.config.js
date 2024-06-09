const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
   plugins: [
     //ComponentsPlugin({ resolvers: [VantResolver()] }), // 当 unplugin-vue-components 版本小于 0.26.0
     ComponentsPlugin.default({ resolvers: [VantResolver()] }), //当 unplugin-vue-components 版本大于等于 0.26.0
   ],
  },
  lintOnSave:false
};