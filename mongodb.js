// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';

// const datbase = 'e-com';

// const client = new MongoClient(url);

// async function getData() {
//     let db = await client.connect();
//     let data = db.db(datbase);
//     return data.collection('prectice');
   
// }
// module.exports=getData;

SEcond page
const dbconnect = require('./mongodb');

// Read
// const main=async()=>{
//     let data = await dbconnect();
//      data= await data.find().toArray();
//     console.log(data);
// }
// main();

// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);

//     })
// })

// Insert
// const insert = async () => {
//     let data = await dbconnect();
//      let result=await data.insertOne(    //use insertMany for many product upload
//         {name:"gorila",brand:"glexy",price:1265,catogry:"mobile"}
//      )
// if(result.acknowledged){
//     console.log("data inserted");

// }
// }
// insert();

// update
// const update = async () => {
//     let data = await dbconnect();
//      let result=await data.updateOne(    //use updateMany for many product upload
//         {name:"gorila"},{$set:{name:"galexy56", price:25451}}
//      )
// if(result.acknowledged){
//     console.log("data update");

// }
// }
// update();
// Delete
// const Delete = async () => {
//     let data = await dbconnect();
//      let result=await data.deleteOne(    //use updateMany for many product upload
//         {name:"galexy56"}
//      )
// if(result.acknowledged){
//     console.log("data delete");
// }
// }
// Delete();