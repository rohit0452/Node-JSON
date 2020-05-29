var http=require("http");

var server = http.createServer((req,res) => {
    console.log("request received")
    res.write("Hello")
    console.log(req.url)
    res.writeHead(200)
    res.end();

})
server.listen(8080) 
