const express = require('express');
const router = express.Router();
const upload = require("../middleware/multer")
const {createProduct,
       getAllProduct,
       getSingleProduct,
       ProductImage,
       updateProduct,
       get_product
                     }= require("../controller/productController");

router.get("/getAllProduct",getAllProduct)
router.get("/getSingleProduct",getSingleProduct)
router.patch("/ProductImage/:id",upload.single("imageUrl"),ProductImage)
router.put("/updateProduct/:id",upload.single("imageUrl"),updateProduct)
router.post("/createProduct",upload.single("imageUrl"),createProduct);
router.get("/get_product",get_product);

module.exports = router;