const http = require('http');
const server = http.createServer(function(req,res){
  X(1,9)
 res(end)
}) 
server.listen(8002)


 function X(res,min,max){
    for(i=0; i<=max-min; i++){
     return res.write(min+i)
    }

}