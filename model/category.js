const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subCategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subCategory",
        required: true,
      },
  
  
  }
,{ timestamps: true });
module.exports = new mongoose.model("Category", categorySchema);
