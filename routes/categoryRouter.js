const express = require('express');
const router = express.Router();
// const upload = require("../middleware/multer");
const {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    // categoryImage,
    deleteCategory
} = require("../controller/categoryController");

router.post("/createCategory", createCategory);
router.get("/getAllCategory", getAllCategory);
router.get("/getSingleCategory", getSingleCategory);
router.put("/updateCategory/:id", updateCategory);
// router.patch("/categoryImage/:id", upload.single("imageUrl"), categoryImage);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
