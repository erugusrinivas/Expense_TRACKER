const { default: mongoose } = require('mongoose')
const mangoose=require('mongoose')

const EmployeeSchema = new mangoose.Schema({
    name:String,
    Password:String,
    ConfirmPassword:String,
    Email:String,
    MobileNumber:String
},
)
const EmployeeModel = mongoose.model("employees",EmployeeSchema)
module.exports = EmployeeModel