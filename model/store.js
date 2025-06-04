const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({

   imageUrl:{
      type: String, // URL or file path
      // required: true,
    },
     business_name:{
        type : String,
        required: true,
     },
     business_type:{
        type : String,
        required: true,
     },
     Description:{
        type : String,
      //   required: true,
     },
     phoneNumber:{
        type : String,
        required: true,
        unique: true,
        match: [/^\+91\d{10}$/, 'Invalid Indian phone number']
     },
     whatsapp_Support:{
        type: Boolean,
      //   required: true

     },
     business_email:{
        type : String,
        required: true,
     },
     store_address:{
        type : String,
        required: true,
     },
     city:{
        type : String,
        required: true,
     },
     state:{
        type : String,
        required: true,
     },
     country:{
        type : String,
        required: true,
     },
     zip_code:{
        type : String,
        required: true,
     },
     user_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
     }
     
},{ timestamps: true });

module.exports = mongoose.model('Store', storeSchema)