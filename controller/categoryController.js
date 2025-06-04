const mongoose= require("mongoose");
const Category = require("../model/category");

exports.createCategory = async (req, res) => {
    try{
        const { name } = req.body;
        console.log(name);
        if (!name) {
            return res.status(400).json({ message: "Category name is required" });
        }
        const data = await Category.create({
            name
            // imageUrl: req.file ? req.file.path : null, // Use uploaded file path
        });
        console.log(data);
        return res.status(201).json({ data, message: "Category created successfully" });
    }catch(error){
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.getAllCategory = async (req, res) => {
    try {
        const data = await Category.find();
        console.log(data);
        if (!data) {
            return res.status(400).json({ message: "Cannot find category" });
        }
        return res.status(200).json({ data, message: "Category found successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.getSingleCategory = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await Category.findOne({ _id: id });
        console.log(data);
        if (!data) {
            return res.status(400).json({ message: "Cannot find category" });
        }
        return res.status(200).json({ data, message: "Category found successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.query;
        const { name } = req.body;
        const data = await Category.findByIdAndUpdate(
            id,
            { name, imageUrl: req.file ? req.file.path : null }, // Use uploaded file path
            { new: true }
        );
        if (!data) {
            return res.status(400).json({ message: "Cannot update category" });
        }
        return res.status(200).json({ data, message: "Category updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
// exports.categoryImage = async (req, res) => {
//     try {
//         const { id } = req.query;
//         const { imageUrl } = req.file;
//         const data = await Category.findByIdAndUpdate(
//             id,
//             { imageUrl },
//             { new: true }
//         );
//         if (!data) {
//             return res.status(400).json({ message: "Cannot update category image" });
//         }
//         return res.status(200).json({ data, message: "Category image updated successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// };
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await Category.findByIdAndDelete(id);
        if (!data) {
            return res.status(400).json({ message: "Cannot delete category" });
        }
        return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};