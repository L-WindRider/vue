module.exports={
    devServer: {
        contentBase: './', //本地服务器所加载的页面所在的目录
        host: '192.168.1.168', //本地IP地址
        //colors: true, //终端输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: '123' //端口号
 
    }
}