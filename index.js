
//File systems

const fs = require('fs');


fs.writeFile("test.txt","Hey there", (err)=>
{
    if(err)
        console.error(err.message);

    console.log("done");
})

//this is a node file and hence runs using node <file_name>

// appendfile --> adds to already existing file



// creates two files with same name
// fs.writeFile("tetst.txt", "Hey bro", (err)=>
// {
//     if(err)
//         console.error(err);
//     console.log("changed");
// })


// append file
fs.appendFile("test.txt"," I'm appending some text here...",(err)=>
{
    if(err)
        console.log(err.message);
    console.log("appended");
})


// rename
// fs.rename("test.txt","testing.txt", (err)=>
// {
//     if(err)
//         console.error(err.message);
//     console.log("Name changed");
// })


// copy file

fs.copyFile("testing.txt","./copyTesting.txt",(err)=>
{
    if(err)
        {
            console.error(err.message);
        }
        console.log("copied");
})


// unlink  --> deletes file
fs.unlink("test.txt",(err)=>
{
    if(err)
        console.error(err);
    console.log("File deleted");
})


// rm --> remove dir(folder), but by dafault can delte only empty folders


fs.readFile("copyTesting.txt",async (err,data)=>
{
    if(err)
        await console.error(err.message)
    await console.log(data);
})
