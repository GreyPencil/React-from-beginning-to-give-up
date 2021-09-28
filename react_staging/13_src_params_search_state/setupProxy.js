const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1',{
            target: 'http://localhost:5000',
            changeOrigin: true, //控制服务器收到的响应头中Host字段的值，默认为false
            pathRewrite:{'^/api1' : ''}
        })
    
    )
}