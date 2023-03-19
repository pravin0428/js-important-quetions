// const mongoose = require("mongoose")
// mongoose.set("strictQuery", false);
// const Connection = () =>{
//     try{
//         mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
//         console.log("DB connected  successfully");
//     }catch(err){
//         console.log(err);
//         console.log("connection failed")
//     }
// } 

// module.exports =  Connection;


const mongoose = require("mongoose")
mongoose.set("strictQuery" , false)
const Connect =  () => {
    try{
     mongoose.connect("mongodb://localhost:27017" , {useNewUrlParser : true})
     console.log("connected successfully")
    }catch(err){
        console.log(err);
        console.log("connection error");
    }
}
module.exports = Connect
 