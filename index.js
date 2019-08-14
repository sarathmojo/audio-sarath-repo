var http = require('http'),
    fs   = require('fs'),
    filePath = 'proxy.wav',
    stat = fs.statSync(filePath);

http.createServer(function(request, response) {

    response.writeHead(200, {
        'Content-Type': 'audio/wav',
        'Content-Length': stat.size
    });

    fs.createReadStream(filePath).pipe(response);
})
.listen(2000);