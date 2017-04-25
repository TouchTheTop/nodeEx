var http = require('http');

var ccap = require('ccap')();//Instantiated ccap class

http.createServer(function (request, response) {

    if(request.url == '/favicon.ico')return response.end('');//Intercept request favicon.ico

    var ary = ccap.get();

    var txt = ary[0];

    var buf = ary[1];

    response.end(buf);

    console.log(txt);

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

// var http = require('http');
// var captchapng = require('captchapng');

// http.createServer(function (request, response) {
//     if(request.url == '/captcha.png') {
//         var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha
//         p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
//         p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

//         var img = p.getBase64();
//         var imgbase64 = new Buffer(img,'base64');
//         response.writeHead(200, {
//             'Content-Type': 'image/png'
//         });
//         response.end(imgbase64);
//     } else response.end('');
// }).listen(8181);