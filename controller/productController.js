const Product = require("../model/product");

exports.createProduct = async (req, res) => {
  try {
    const {
      barcode,
      productName,
      mrp,
      sellingPrice,
      unit,
      productDetails,
      available,
      size,
      color,
      store_id,
      category_id,
    } = req.body;
    if(!barcode || 
      !productName || 
      !mrp ||
       !sellingPrice || 
       !unit ||
        !store_id || 
        !category_id) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body);
    const data = await Product.create({
      barcode,
      productName,

      mrp,
      sellingPrice,
      unit,
      productDetails,
      available,
      size,
      color,
      store_id,
      category_id,
      // imageUrl: req.file ? req.file.path : null, // Use uploaded file path
    });
    console.log(data);

    return res
      .status(201)
      .json({ data, message: "Product created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const data = await Product.find();
    console.log(data);
    if (!data) {
      return res.status(400).json({ message: "cannot find store" });
    }
    return res.status(200).json({ data, message: "store found successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const {id} = req.query;
    const data = await Product.findOne({_id:id});
    console.log(data);
    if (!data) {
      return res
        .status(400)
        .json({ message: "cannot find store  with this id" });
    }
    return res.status(200).json({ data, message: "store found successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.ProductImage = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const imageUrl = req.file.path;
    const data = await Product.updateOne(
      {_id:id},
      {imageUrl},
      {new:true}
    );
    if (!data) {
      return res
        .status(400)
        .json({ message: "cannot find product with this id" });
    }
    return res
      .status(200)
      .json({ data, message: "product updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const productDetails = req.body;
    const data = await Product.updateMany({_id:id}, productDetails, {
      new: true,
    });
    if (!data) {
      return res
        .status(400)
        .json({ message: "cannot find product with this id" });
    }
    return res
      .status(200)
      .json({ data, message: "product updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const {id} = req.query;
    const data = await Product.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(400)
        .json({ message: "Cannot find product with this id" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.get_product = async (req, res) => {
  try {
    // const { _ } = req.query;
    // console.log(category_id);
    const data = await Product.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "result"
        },
      },
      {
        $lookup: {
          from: "subcategories",
          localField: "subcategory_id",
          foreignField: "_id",
          as: "result"
        }

      }
    ]);
    console.log(data);
    if (!data) {
      return res.status(400).json({ message: "product not found" });
    }
    return res.status(200).json({ data, message: "cannot find product" });
  } catch (error) {
    return res.status(500).json({ error, message: error.message });
  }
};
