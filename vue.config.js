const path = require('path');
const resolve = dir => path.join(__dirname , dir)
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/ivies-admin' : '/'



module.exports = {
    baseUrl : BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    // 打包时， 不生成map 文件，减小打包体积
    procutionSourceMap: false
}