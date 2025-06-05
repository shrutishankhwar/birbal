
const subCategory = require("../model/Subcategory");

exports.createSubCategory = async (req, res) => {
    try{
        const {name} = req.body;
        console.log(req.body);
        if (!name ) {
            return res.status(400).json({ message: "Name is required" });
        }
        const data = await subCategory.create({
            name
           
        });
        console.log(data);
        return res.status(201).json({ data, message: "SubCategory created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.getAllSubCategory = async (req, res) => {
    try {
        const data = await subCategory.find();
        console.log(data);
        if (!data) {
            return res.status(400).json({ message: "Cannot find subcategory" });
        }
        return res.status(200).json({ data, message: "SubCategory found successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
exports.getSingleSubCategory = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await subCategory.findOne({ _id: id });
        console.log(data);
        if (!data) {
            return res.status(400).json({ message: "Cannot find subcategory" });
        }
        return res.status(200).json({ data, message: "SubCategory found successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

exports.updateSubCategory = async (req, res) => {
    try {
        const { id } = req.query;
        const { name} = req.body;
        const data = await subCategory.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );
        if (!data) {
            return res.status(400).json({ message: "Cannot update subcategory" });
        }
        return res.status(200).json({ data, message: "SubCategory updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }

};

exports.deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await subCategory.findByIdAndDelete(id);
        if (!data) {
            return res.status(400).json({ message: "Cannot delete subcategory" });
        }
        return res.status(200).json({ message: "SubCategory deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}