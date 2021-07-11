const http = require("http");

var i=0;
var interval ;
http.createServer((request,response)=>{
    if(request.url.toLowerCase() == "/events"){
        response.writeHead(200,{
            Connection : "Keep-Alive",
            "Content-type":"text/event-stream",
            "Access-Control-Allow-Origin":"*"
        })
        clearInterval(interval);
        interval = setInterval(()=>{
             response.write(`data:{"value": ${i}} \n\n`);
             ++i;
        },3000);
    }
    else  if(request.url.toLowerCase() == "/stop-events"){
        response.writeHead(200,{
            Connection : "Keep-Alive",
            "Content-type":"application/json",
            "Access-Control-Allow-Origin":"*"
        })
        clearInterval(interval);
        response.end();
    }
    else{
        response.writeHead(404);
        response.end();
    }
})
.listen(4000,()=>{
    console.log("Server is running at port 4000");
})
.on("error",(err)=>{
    console.error("Error is :: ",err)
})