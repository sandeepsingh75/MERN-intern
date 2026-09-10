import fs from "fs/promises";
// let b=  await fs.writeFile("sandeep.txt","\n This is amazing promise")
let b= await fs.appendFile("sandeep.txt","\n this is new")
let a = await fs.readFile("sandeep.txt");

console.log(a.toString());
