const mongoose=require("mongoose")


const ContactSchema=mongoose.Schema({
    name:{
        type:string,
        required:[true,"please add your contact name"]
    },
    email:{
        type:string,
        required:[true,"please add your contact email address"]
    },
    phone:{
        type:string,
        required:[true,"please add your contact phone number"]
    },
    timestamp:true
})


module.exports=mongoose.modek("Contact",ContactSchema)