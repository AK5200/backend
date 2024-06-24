
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

// const http = require('http');

// const server = http.createServer((req,res)=>
// {
//     res.end("Server started");
// })

// server.listen(3000);


// http, fs and a lot of packages are pre-installed on nodejs
// others we have to install on our own

// devdependency- only used for development not after deploy

// we can run start and test script by directly npm start and npm test,
// becoz these two commands are stored in os by node
// for others we need  (  npm run script_name  )  specifying os to find in my files as it is not a stored command.


 

// EXPRESS
// express is a framework-> predefined steps, like first create server then routes etc
// react is a library-> provides developer with tools now the user can use it however they want.
// express manages everything from receiving the request and giving the resonse.

// const express = require('express');
// const app = express();


// app.get(route, routehandler)
// app.get('/',(req,res)=>
// {
//     res.send('Hello World');
// })

// app.listen(3000);


// Middleware
// anything which you (developer) want to perform before moving to routes
// e.g getting user details and later pass on to the routes
// request(user) --> middleware --> route  <-- response

// so every middleware runs before routes 
// and middlewares are written using (  .use  )

// app.use( (req,res,next)=>
// {
//     console.log(`control is with middleware`);
//     next();
// })


// next() handles the control to the routes
// if we do not call next the control will never forwarded to the routes

// app.get('/', (req,res)=>
// {
//     res.send(`control is with routes`)
// })

// app.listen(3000);





// cookie and session
// when user requests anything from user say user wants a picture from facebook,
// user request will reach fb server and fb will ask user who r they? login.
// and once user loges in fb server will send the requested picture and as soon as the picture is sent 
// thee connection will get cut and say after a minute you want to like a photo then fb will again ask you to signup
// that's where cookie comes in, when the first request is sent to fb server, fb server responds with an additional identifier,
// which is stored at the user's end that is called cookie.
// now the user request will go along with the cookie and the server will recognize the user.
// this whole thing from one login to one logout is called a session.




// middlewares
// we usually use middlewares like .json and urlencoded
// becoz the data which user sends is converted into blob in converting back to json and url we need middlewares

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));





// 24-06-24

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(express.static(path.join(__dirname,'public')));
// express ko bolre saare static files __dirname/public mae hai
// __dirname location till root folder in this project and then /public se publc folder.
// ejs files mae path mae public add nahi karenge



app.set('view engine', 'ejs');
// what will backend render (i.e show) that is ejs (views)  ejs--frontend

app.get("/", (req,res)=>
{
    // res.send("hello there")
    // here for rendering an entire fire we just need to add that file in views folder and .render will automatically render it from views (ejs property)
    // but ejs file honi chahiye
    res.render("index");

})


// : means dynamic route, here anything can come after : (acts as a variable)
// e.g /about/anupam  (will work)     /about/anurag
//and to access we use req.params  (sends an object of all the : variables)
// specific? req.params.username

app.get("/about/:username", (req,res)=>
{
    res.send(`Hey ${req.params.username}`);
    console.log(req.params);
    console.log(req.params.username);
})

app.listen(3000, ()=>
{
    console.log("server chalra hai");
})


