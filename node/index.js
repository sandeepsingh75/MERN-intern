const fs = require('fs');

console.log("start")
// fs.writeFileSync("sandeep.txt","Hey Sandeep Singh Good Morning");

fs.writeFile("sandeep2.txt","Hey Sandeep, Good morning",()=>{
    // console.log("done")

    fs.readFile("sandeep.txt", (error, data)=>{
        // console.log(error,data.toString())
    })
})

fs.appendFile("sandeep.txt","data1 added",(error, data1)=>{
    console.log(error, data1)
})

let fileData = fs.readFileSync("sandeep.txt", 'utf-8');
console.log("file",fileData);