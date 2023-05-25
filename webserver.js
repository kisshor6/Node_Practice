const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.setHeader('header-type', 'text-html')

    if (req.url == '/') {
        res.end('<h1>hello from the new york you hit slash on url !!</h1>');

    }else if (req.url == '/home') {
        res.end('<h1>hello to the home screen of website you hit slash on home button !!</h1>');

    }else if (req.url == '/contact') {
        res.end('<h1>hello to the contact screen of website you hit slash on contact button !!</h1>');

    }else if (req.url == '/api') {
        fs.readFile(`${__dirname}/package-lock.json`, "utf-8", (err, data)=>{
            console.log(data);
            res.end(data);
        });


    }else if (req.url == '/about') {
        res.end('<h1>hello to the about screen of website you hit slash on about button !!</h1>');

    }else{
        res.writeHead(404);
        res.end('<h1>hello This is 404 and welcome to 404 page</h1>');

    }

});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening from the server port no 8000");
});