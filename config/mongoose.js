const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
 
const db=mongoose.connection;
db.on("error",console.error.bind(console,"error connecting to db"));
db.once("open",()=>console.log("connected to db"));

module.exports=db;