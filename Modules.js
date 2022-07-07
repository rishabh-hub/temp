// const amount =12;

// if(amount <10)
// console.log("small number");

// else
// console.log("large no.");

// console.log("heres my first node app");

//Modules
// const names = require('./names');
// const sayHI=require("./utils");

// sayHI("susan");
// sayHI(names.john);
// sayHI(names.peter);

//built-in modules

// const os=require('os');

//info bout current user

// const user=os.userInfo();
// console.log(user);
//method returns system uptime in seconds
// console.log("The system uptime is "+os.uptime);

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }

// console.log(currentOS);

// const path = require('path');
// console.log(path.sep); 

// const filepath=path.join('/content',"/subfolder","text.txt");
// console.log(filepath);

// const base=path.basename(filepath);
// console.log(base);

// const abspath=path.resolve(__dirname,"content","subfolder","text.txt");
// console.log(abspath);

//filesystem synchronus way
// const {readFileSync,writeFileSync} =require("fs");

// const first= readFileSync("./content/first.txt","utf8");
// const second= readFileSync("./content/second.txt","utf8");

// writeFileSync("./content/result-sync.txt","Here is result: "+first+second,{flag:'a'})

//filesystem asynchronus way

// const {readFile,writeFile}=require("fs");
// console.log("start")

// readFile("./content/first.txt","utf8",(err,result)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }   

//     const first=result;

//     readFile("./content/second.txt","utf-8",(err,result)=>{

//         if(err)
//     {
//         console.log(err);
//         return;
//     }   

//     const second=result;
//     writeFile("./content/result-async.txt","Here is result asynced :"+first+second,(err,result)=>{
//         if(err)
//         {
//             console.log(err);
//             return;
//         }
//         console.log("done with this task");
//     });
//     })
// })
// console.log("starting with next task")
