// const http = require("http");

// const server= http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//         res.end("Welcome to our Homepage");
//     }
//     if(req.url==='/about')
//     {
//         res.end("Here is our short history");
//     }
    
//     res.end(`<h1>Oops!</h1> <p>We cant seem to find the page youre looking for</p><a href="/">Back Home</a>`);

// });

// server.listen(5000)

// const _ = require('lodash');

// const items = [1 , [2,[3,[4]]]]

// const newItems=_.flattenDeep(items);
// console.log(newItems);
// console.log("Hello People")

// const http=require("http");

// const server=http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//         res.end('Home Page');
//     }

//     else if(req.url==='/about')
//     {
//         //BLOCKING CODE
//         for(let i=0;i<1000;i++)
//         {
//             for(let j=0;j<1000;j++)
//             {
//                 console.log(j+" "+i);
//             }
//         }

//         res.end('About Page');
//     }

//     else{
//         res.end('Error')
//     }
// });

// server.listen(5000,()=>{
//     console.log("Server is listening on port:5000");
// })

const {readFile,writeFile} = require("fs").promises;

// const getText = (path) => // a promise
// {
//     return new Promise((resolve,reject)=>{
        
//         readFile(path,"utf-8",(err,data)=>
//             {
//                 if(err)
//                 {
//                     reject(err);
//                 }
//                 else{
//                     resolve(data);
//                 }
//             });
//     });
// }

// getText('./content/first.txt').then((result) => console.log(result)).catch((err)=>console.log(err));

const util =require("util");
const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);


const start = async()=>{

    try{
        const first = await readFile('./content/first.txt',"utf-8");
        const second = await readFile("./content/second.txt","utf-8");
        await writeFile('./content/third.txt','This is data for third file'+first+" "+second,{flag:'a'});
        console.log(first);
        console.log(second);


    }
    catch(err)
    {
        console.log(err);
    }
}

start();
