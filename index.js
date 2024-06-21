
// //File systems

// const fs = require('fs');


// fs.writeFile("test.txt","Hey there", (err)=>
// {
//     if(err)
//         console.error(err.message);

//     console.log("done");
// })

// //this is a node file and hence runs using node <file_name>

// // appendfile --> adds to already existing file



// // creates two files with same name
// // fs.writeFile("tetst.txt", "Hey bro", (err)=>
// // {
// //     if(err)
// //         console.error(err);
// //     console.log("changed");
// // })


// // append file
// fs.appendFile("test.txt"," I'm appending some text here...",(err)=>
// {
//     if(err)
//         console.log(err.message);
//     console.log("appended");
// })


// // rename
// // fs.rename("test.txt","testing.txt", (err)=>
// // {
// //     if(err)
// //         console.error(err.message);
// //     console.log("Name changed");
// // })


// // copy file

// fs.copyFile("testing.txt","./copyTesting.txt",(err)=>
// {
//     if(err)
//         {
//             console.error(err.message);
//         }
//         console.log("copied");
// })


// // unlink  --> deletes file
// fs.unlink("test.txt",(err)=>
// {
//     if(err)
//         console.error(err);
//     console.log("File deleted");
// })


// rm --> remove dir(folder), but by dafault can delte only empty folders



// ERROR
// fs.readFile("copyTesting.txt",async (err,data)=>
// {
//     if(err)
//         await console.error(err.message)
//     await console.log(data);
// })


// HTTP protocol- rules governing all response request from internet
// predefined in OS


// SERVER

const http = require('http');

const server = http.createServer((req,res)=>
{
    res.end("Server started");
})

server.listen(3000);


// http, fs and a lot of packages are pre-installed on nodejs
// others we have to install on our own

// devdependency- only used for development not after deploy

// we can run start and test script by directly npm start and npm test,
// becoz these two commands are stored in os by node
// for others we need  (  npm run script_name  )  specifying os to find in my files as it is not a stored command.


 