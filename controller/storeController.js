const Store = require("../model/store");
const mongoose = require("mongoose");

exports.createStore = async (req, res) => {
  try {
    const {
      imageUrl,
      business_name,
      business_type,
      Description,
      phoneNumber,
      whatsapp_Support,
      business_email,
      store_address,
      city,
      state,
      country,
      zip_code,
      
    } = req.body;
    console.log(req.body);
    if (
      !business_name ||

      !business_type ||
      !Description ||
      !phoneNumber ||
      !whatsapp_Support ||
      !business_email ||
      !store_address ||
      !city ||
      !state ||
      !country ||
      !zip_code||
      !imageUrl
    ) {
      return res.status(400).json({ message: "fields are required" });
    }
    const data = await Store.create({
      imageUrl: req.file ? req.file.path : null,
      business_name,
      business_type,
      Description,
      phoneNumber,
      whatsapp_Support,
      business_email,
      store_address,
      city,
      state,
      country,
      zip_code,
    });
    console.log(data);
    return res
      .status(201)
      .json({ data, message: "Store created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};


exports.getAllStore = async( req,res)=>{
    try{
        const data = await Store.find();
        if(!data){
            return res.status(400).json({message:"cannot find store"})
        }
        return res.status(200).json({data,message:"store found successfully"});
    }catch(error){
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.getSingleStore = async (req,res)=>{
    try{
        const {id} = req.query;
        const  data = await Store.findOne({_id:id});
        console.log(data);
        if(!data){
            return res.status(400).json({message:"cannot find store  with this id"});
        }
        return res.status(200).json({data,message:"store found successfully"});
    }catch(error){
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


exports.updateStore = async (req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        
        const storeDetails
         = req.body;
        console.log(req.body);
        const data= await Store.findByIdAndUpdate(
          {_id:id},
          storeDetails,
          { new: true }
        );
        console.log(data)
        if (!data) {
          return res.status(400).json({ message: "cannot find store with this id" });
        }
        return res.status(200).json({ data, message: "store updated successfully" });
    }catch(error){
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};



exports.storeImage = async (req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        
        const { imageUrl }
         = req.file;
        console.log(req.file);
        const data= await Store.findByIdAndUpdate(
          {_id:id},
          { imageUrl },
          { new: true }
        );
        console.log(data)
        if (!data) {
          return res.status(400).json({ message: "cannot find store with this id" });
        }
        return res.status(200).json({ data, message: "store updated successfully" });
    }catch(error){
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.deleteStore = async (req, res) => {
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
    