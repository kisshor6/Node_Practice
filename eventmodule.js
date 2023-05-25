const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('kisshor', ()=>{
//     setTimeout(() => {
//         console.log("This is the name of person");
//     }, 2000);
// })

// event.on('kisshor', ()=>{
//     console.log("This is the name of class");
// })

// event.on('kisshor', ()=>{
//     console.log("This is the name of profession");
// })

// event.emit("kisshor");

// passing parameters

event.on('harshing', (sc, msg)=>{
    console.log(`Your status code is ${sc} and page is ${msg}`);
})

event.emit("harshing", 200, "ok")