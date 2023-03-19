 
const express =  require("express");
const userModel = require("../schema/authSchema");


 
const Signup = async(req , res) =>{
  const {name, email, password } = req.body;
  console.log(name , email , password);
 try{
 let user = new userModel({
    name , 
    email , 
    password
  })
   await user.save()
   res.send("user created successfully")
 }catch(err){
  console.log(err);
 }
}

const GetAllUsers = async(req , res) =>{
 
  let users = await userModel.find();
  try {
    if (users) {
      res.send({ users: users, status: true });
    } else {
      res.send({ status: false, message: "No user found" });
    }
  } catch (error) {
    res.send({ status: false, message: error });
  }
  }

const Login = async(req , res) =>{
    // res.send("able to access")
    let { email, password } = req.body
    let user = await findUser({ email })
    if(user){
      return  res.send("user login success")
    }else{
      return res.send("email not found")
    }
  }

module.exports = {
    Signup,
    Login,
    GetAllUsers  
}
