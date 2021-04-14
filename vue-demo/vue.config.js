let baseHost = '127.0.0.1';
let basePort = process.env.NODE_ENV==='dev' ? 38080 : 38090;
let proxyBaseUrl = 'http://127.0.0.1:29999';

module.exports = {
    publicPath: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    assetsDir: 'public', //放置生成的静态资源(js、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    // pages: {
    //     //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    //     index: {
    //         //除了 entry 之外都是可选的
    //         entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
    //         //template: 'public/index.html', // 模板来源
    //         filename: 'index.html', // 在 dist/index.html 的输出
    //         title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
    //         // chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    //     }
    // },
    lintOnSave: true, // 是否在保存的时候检查
    productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps
        loaderOptions: {}, // css预设器配置项
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },
    //反向代理
    devServer: {
        // 环境配置
        host: baseHost,
        port: basePort,
        //配置使用ssl
        https: false,
        //配置热部署-不刷新浏览器（1. hot: true单纯设置为true的时候，如果编译报错，会抛出错误，你重新改成正确的，这个时候又会触发重新编译，整个浏览器会重新刷新！2. hotOnly: true这个也设置的话，如果编译报错，你再改成正确的，重新编译，浏览器不会刷新！）
        hot: true,
        hotOnly: true,
        //配置自动启动浏览器
        // open: true, 
        proxy: {
            // 配置多个代理
            '/api': {
                //代理服务器地址
                target: proxyBaseUrl,
                // 是否启用websockets
                ws: true, 
                // 使用的是http协议则设置为false，https协议则设置为true
                secure: false, 
                //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
    pluginOptions: {
        // 第三方插件配置
        // ...
    }
}