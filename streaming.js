const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{

    // fs.readFile("input.txt","utf-8", (err, data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    //this is the way to streaming the data

    const stream = fs.createReadStream("input.txt");

    // stream.on("data", (chunkdata)=>{
    //     res.write(chunkdata);

    // });
    // stream.on("end", ()=>{
    //     res.end();
    // });
    // stream.on("error", (err)=>{
    //     res.end("File is not found");
    // });

    //third way

    stream.pipe(res);
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the server");
})