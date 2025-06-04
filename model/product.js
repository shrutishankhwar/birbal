const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    
    barcode: {
      type: String,
      unique: true,
      sparse: true, // allows uniqueness while permitting null values
    },
    productName: {
      type: String,
      // required: true,
      // trim: true,
    },
    
    mrp: {
      type: Number,
      // required: true,
    },
    sellingPrice: {
      type: Number,
      // required: true,
    },
    unit: {
      type: String,
      enum: ["Piece", "Kg", "Liter", "Pack"],
      // required: true,
    },
    productDetails: {
      type: String,
    },
    available: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    imageUrl: {
      type: String, // URL or file path
    },
    store_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
