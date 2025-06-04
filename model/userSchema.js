const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^\+91\d{10}$/, 'Invalid Indian phone number'],
  },
  password: {
    type: String,
    required: true,

  },
  otp: {
    code: {
      type: String,
    },
    expiresAt: {
      type: Date,
    },
  },
  
  isPhoneVerified: {
    type: Boolean,
    default: false,
  }
  
}, { timestamps: true });

 module.exports = mongoose.model('User',userSchema);