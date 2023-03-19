const express = require("express")
const productModel = require("../schema/proSchema")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get("/" , async(req , res) =>{
    let data = await productModel.find()
    res.status(200).send({data})
})

app.get("/:id" , async(req , res) => {
    try{
    const {id} = req.params
    let newdata = await productModel.findById(id)
    res.send(newdata)
    console.log(newdata)
  }catch(err){
    console.log(err)
  } 
})

app.post("/" , async(req , res) => {
    try {
        const newDoc = new productModel(req.body); // create a new document using the request body
        await newDoc.save(); // save the document to the database
        res.status(201).json(newDoc); // return the new document to the client
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
})

app.delete("/:id" , async(req , res) => {
    const {id} = req.params
    console.log(id)
    try{
        const data = await productModel.findByIdAndDelete(id)
        res.status(200).send("data deleted successfully");
     }catch(err){
        console.log(err)
        res.send("id not found");

     }
    
})

module.exports = app 