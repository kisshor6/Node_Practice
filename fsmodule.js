const fs = require('fs');

// synchronous File System Core Modules

// fs.writeFileSync("file.pdf", "welcome to my file");

// fs.appendFileSync("file.pdf", " This is second file welcome to my file");

// const a =  fs.readFileSync("file.pdf");
// console.log(a.toString());

// to rename file 

//  fs.renameSync("read_write.txt","read_write.pdf");

// fs.unlinkSync("read_write.pdf");


// project I 

// check respectively one by one
 
// fs.mkdirSync('./hatta');

// fs.writeFileSync('hatta/aautari.pdf', "this is the project work II wich is created after creating folder");

// fs.appendFileSync("hatta/aautari.pdf", " this is for the second line");

// const a =  fs.readFileSync("hatta/aautari.pdf", "utf8")
// console.log(a); 

// fs.renameSync("hatta/aautari.pdf","hatta/nabin.txt");

// fs.unlinkSync("hatta/nabin.txt");

// fs.rmdirSync("hatta");



// Asynchronous File System Core Modules

// fs.mkdir("hatta", (err)=>{
//     console.log("folder created");
// });

// fs.writeFile("hatta/Asynchronous.txt","this is the Asynchronous method to write file", (err)=>{
//     console.log("File is created")
// })


// fs.appendFile("hatta/Asynchronous.txt", " please update this line in Asynchronous file", (err)=>{
//     console.log("data successfully inserted")
// });

// fs.readFile("hatta/Asynchronous.txt", "utf8", (err, data)=>{
//     console.log(data);
// })

// fs.unlink("hatta/Asynchronous.txt", (err)=>{
//     console.log("file deleted");
// });

// fs.rmdir("hatta", (err)=>{
//     console.log("folder was deleted");
// })