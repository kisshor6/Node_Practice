const fs = require('fs');

const bioData = {
    name: "kisshor",
    qualification: "+2",
    Education: "commerce-business",
    age: 52,
    profession: "Programmer"
};

const JSONdata = JSON.stringify(bioData);
console.log(JSONdata);

// fs.writeFile('json1.json', JSONdata, (err)=>{
//     console.log("done !!");
// })

// fs.readFile('json1.json',"utf8",  (err, data)=>{
//     // console.log(data);
//     const orgData = JSON.parse(data);
//     console.log(orgData);
// });


// fs.unlink("json1.json", (err)=>{
//     console.log("completed.");
// })


