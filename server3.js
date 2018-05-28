var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 8888;


var server = http.createServer(function(request, response){
  var temp = url.parse(request.url, true)
  var path = temp.pathname 
  var query = temp.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('HTTP 路径为\n' + path)
  if(path == '/style.css'){
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body{background-color: #ddd;padding: 50px;}h3{color: #f60;}')
    response.end()
  }else if(path == '/main.js'){
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write('var p = document.createElement("p")'
    + ';var str = document.createTextNode("This is code that is written using js.")' 
    + ';p.appendChild(str)'
    + ';document.body.appendChild(p)')
    response.end()
  }else if(path == '/'){
    var string = fs.readFileSync('./index2.html','utf8')
    var amount = fs.readFileSync('./db','utf8') //100
    string = string.replace('&&&amount&&&', amount)
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write(string)
    response.end()
  }else if (path === '/pay'){
    let amount = fs.readFileSync('./db', 'utf8')
    amount -= 1
    fs.writeFileSync('./db', amount)
    response.setHeader('Content-Type', 'application/javascript')
    response.write('amount.innerText = ' + amount) // 浏览器执行此代码以更新页面‘余额’
    // 也可以使用es6：response.write(`amount.innerText = amount.innerText - 1`)
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)