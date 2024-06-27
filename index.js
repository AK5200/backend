



// 24-06-24
const fs = require("fs");
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

// app.get("/", (req,res)=>
// {
//     // res.send("hello there")
//     // here for rendering an entire fire we just need to add that file in views folder and .render will automatically render it from views (ejs property)
//     // but ejs file honi chahiye
//     res.render("index");

// })


// : means dynamic route, here anything can come after : (acts as a variable)
// e.g /about/anupam  (will work)     /about/anurag
//and to access we use req.params  (sends an object of all the : variables)
// specific? req.params.username

// app.get("/about/:username", (req,res)=>
// {
//     res.send(`Hey ${req.params.username}`);
//     console.log(req.params);
//     console.log(req.params.username);
// })


app.get('/', (req,res)=>{
   fs.readdir(`./files`, (err,files)=>
{
    res.render("index", {files:files});
})
    
})

app.post('/create', (req,res)=>
{
    // req.body.content and req.body.title are coming from their name
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.content, (err)=>{
    if(err)
    console.error(err); })
     res.redirect('/');
})


app.get('/file/:filename', (req,res)=>
{
    fs.readFile(`./files/${req.params.filename}`, "utf-8", (err,filedata)=>
    {
        res.render('show', {filename:req.params.filename, filedata:filedata});
    })
})



// edit
app.get('/edit/:filename', (req,res)=>{
    res.render('edit',{filename:req.params.filename});
})

app.post('/edit',(req,res)=>
{
    fs.rename(`./files/${req.body.prevname}.txt`, `./files/${req.body.newname}.txt`, (err)=>
    {
        if(err)
            console.error(err);

        res.redirect('/');
    })
} )



//delete
app.get('/delete/:filename', (req,res)=>{
    res.render('delete',{filename:req.params.filename});
})

app.post('/delete', (req,res)=>{
    fs.unlink(`./files/${req.body.filename}`, (err)=>
    {
        if(err)
            console.error(err);
        res.redirect('/')
    })
})


app.listen(3000, ()=>
{
    console.log("server chalra hai");
})


// the above is alright but we cannot always use filesystem,
// as they are not scalable, can only store txt
//