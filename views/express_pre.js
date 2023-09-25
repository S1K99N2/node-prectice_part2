
// USE O F EXPRESS START

// const express =require('express');
// const app =express();

// app.get("",(req,res)=>{
//     res.send(`<h1>hello HOME how r u</h1>
//     <a href="/about">go to ABOUT</a>
//     <a href="/blog">go to BLOG</a>
//     <a href="/contect">go to CONTECT</a>
//     `)
// })
// app.get("/about", (req, res) => {
//     res.send(`
//     <h1>hello ABOUT how r u</h1>
//     <a href="/">go to home</a>
//     <a href="/blog">go to BLOG</a>
//     <a href="/contect">go to CONTECT</a>
//     `)
// });
// app.get("/blog", (req, res) => {
//     res.send(`
//     <h1>hello ABOUT how r u</h1>
//     <a href="/">go to home</a>
//     <a href="/about">go to ABOUT</a>
//     <a href="/contect">go to CONTECT</a>

//     `)
// })
// app.get("/contect", (req, res) => {
//     res.send(`
//     <h1>hello CONTECT how r u</h1>
//     [
//         {
//             name:"niraj",
//             email:"niraj@gmail.com"
//         },
//         {
//             name:"niraj",
//             email:"niraj@gmail.com"
//         }
//     ]
//     <a href = "/"> go to home</a>
//     <a href="/about">go to ABOUT</a>
//     <a href="/blog">go to blog</a>
//     `)
// })
// app.listen(5000);
// app.get("",(req,res)=>{
//     res.send(`helllo sona how r u home`)
// })
// app.get("/aaa", (req, res) => {
//     res.send(`helllo sona how r u AAA`)
// })
// app.get("/bbb", (req, res) => {
//     res.send(`helllo sona how r u BBB ${req.query.name}`)
// })
// app.get("/ccc", (req, res) => {
//     res.send(`helllo sona how r uCCC`)
// })
// app.listen(5000);



// const {MongoClient}=require('mongodb');
// const url ='mongodb://127.0.0.1:27017';
// const database='e-com'

// const client= new MongoClient(url);

// async function getData(){
//     let result=await client.connect();
//     let db=result.db(database);
//     let collection= db.collection('prectice');
//     let response=await collection.find({}).toArray();
//     console.log(response);
// }
// getData();  