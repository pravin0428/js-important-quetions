const express = require("express")
const  Connect = require("./config/db")
//  const Connection = require("./config/db")
const proroute = require("./routes/proroute")
const authroutes = require("./routes/authroute")
// const cors = require("cors");

const app = express()
app.use(express.json())
 app.use(express.urlencoded({extended : true}))
 app.use("/" , proroute)
 app.get("/getallusers" , authroutes.GetAllUsers)
 app.post("/signup" , authroutes.Signup)
 app.post("/login" , authroutes.Login)
 
  

app.listen(8080 , () => {
 try {
    Connect()
   console.log("http://localhost:8080")
 }catch(err){
    console.log(err);
 } 
})

 
 