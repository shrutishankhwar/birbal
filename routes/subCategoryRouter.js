const express = require('express');
const router = express.Router();        
const {createSubCategory,
    getAllSubCategory,
    getSingleSubCategory,
    updateSubCategory,
    deleteSubCategory
}= require("../controller/subcategoryController");

router.post("/createSubCategory", createSubCategory);
router.get("/getAllSubCategory", getAllSubCategory);
router.get("/getSingleSubCategory", getSingleSubCategory);
router.put("/updateSubCategory/:id", updateSubCategory);
router.delete("/deleteSubCategory/:id", deleteSubCategory);

module.exports = router;