# nodejs-test

## 启动应用

`node server.js 8888`

或者

`node server 8888`

## 添加路由

1.  编辑 server.js 文件，添加 if else
2.  重新运行 node server.js 8888

## 后台启动应用

`node server.js 8888 >! log 2>&1 &`

index2.html & server2.js/server3.js为JSONP

注意三个serverjs的上半部分都不同
也因此执行代码也不同
server2和server一样
`node serverXX 端口号`

server3
`PORT=端口号 node server3.js`