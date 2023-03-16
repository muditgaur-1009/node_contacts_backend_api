const asyncHandler=require("express-async-handler")

//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContacts=asyncHandler( async(req,res)=> {
    res.status(200).json({message:"get all contacts"})
})

//@desc create contacts
//@route POST/api/contacts
//@access public
const createContact=asyncHandler( async(req,res)=>{
    console.log("the request body is :",req.body)
    const{name ,email,phone}=req.body;
    if (!name||!email||!phone) {
        res.status(400);
        throw new error("all fields required");
        
    }
    res.status(201).json({message:"Create Contacts"})
})

//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContact=asyncHandler( async(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
})

//@desc Update contacts
//@route GET/api/contacts
//@access public
const updateContact=asyncHandler( async(req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`})
})


//@desc delete contacts
//@route GET/api/contacts
//@access public
const deleteContact=asyncHandler( async(req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
})

module.exports={getContact,createContact,getContacts,updateContact,deleteContact}