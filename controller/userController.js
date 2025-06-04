const User =  require('../model/userSchema');
const mongoose = require('mongoose');

exports.createUser = async( req,res) => {
    try{
        const {phoneNumber,password} = req.body;
        console.log(phoneNumber);
        if(!phoneNumber || !password ) {
            return res.status(400).json({ message: "phoneNumber, password is required " });
        }
        const data = await User.create({
            phoneNumber,
            password
        })
        console.log(data);
        return res.status(201).json({data,message:"user created successfully"});
    }catch(error){
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.getAllUser = async(req,res)=>{
    try{
        const data = await User.find();
        if(!data){
            return res.status(400).json({message:"cannot find users"})
        }
        return res.status(200).json({data,message:"users found successfully"});
    }catch(error){
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.getSingleUser = async (req,res)=>{
    try{
        const {id} = req.query;
        const  data = await User.findOne({_id:id});
        console.log(data);
        if(!data){
            return res.status(400).json({message:"cannot find user  with this id"});
        }
        return res.status(200).json({data,message:"user found successfully"});
    }catch(error){
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


exports.updateUser = async (req,res)=>{
    
  try {
    const id = req.params.id;
    console.log(id);
    const userDetails = req.body;
    const data= await User.updateMany(
      {_id:id},
      userDetails,
      { new: true }
    );

    console.log(data)
    if (!data) {
      return res.status(400).json({ message: "client not found" });
    }
    return res.status(200).json({ data: data, meassge: "get single client successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const { password } = req.body;
    console.log(password);
    const data= await User.deleteOne(
      id,
      { password },
      { new: true }
    );
    if (!data) {
      return res.status(400).json({ message: "client not found" });
    }
    return res
      .status(200)
      .json({ data, meassge: "get single client successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
    