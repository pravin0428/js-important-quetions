const {model, Schema} = require("mongoose")

const productSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    discription : {
        type : String,
        require : true 
    }
})

const productModel = model("pro" , productSchema)

module.exports = productModel