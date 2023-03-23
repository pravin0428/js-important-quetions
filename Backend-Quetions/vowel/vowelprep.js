 
 

 

 


// const fs = require("fs")

// const data  = fs.readFileSync("./file.md")
// console.log(1)
// console.log(2)


// const fs = require("fs")

// const data  = fs.readFile("./file.md" , (err , data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// console.log(1)
// console.log(2)


//server without express

// const http = require("http")

// const server = http.createServer((req , res) => {
//     res.statusCode = 200
//     res.setHeader = ("Content Type" , "plain/text")
//     res.end("hello world - 1234")
// })


// server.listen(8080 , () => {
//     console.log(`listning on http://localhost:8080`)
// })

 
// const express = require("express")

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended : true}))


// app.get("/" , (req , res) => {
//     res.send("heyyyy")
// })

// app.listen(8080 , () => {
//     console.log(`listning on http://localhost:8080`)
// })


function two(){
    setTimeout(() => {
      console.log("web api")
    },3000)
}

function one(){
    console.log("not time comsuming")
     two()
    console.log("last")
}
one()

// need to update all the quetions
// .













