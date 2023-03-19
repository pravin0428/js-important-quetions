const {Schema , model} = require("mongoose")

const newUserSchema = new Schema({
    name : {
        type : String,
        require : true
    },
   email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },

})

const userModel = model("ppp" ,newUserSchema )

module.exports = userModel
