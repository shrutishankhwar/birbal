const  express =require("express");
const router = express.Router();
const upload = require("../middleware/multer")
const {createStore,
    getAllStore,
    getSingleStore,
    updateStore,
    storeImage,
    deleteStore

}= require("../controller/storeController");

router.post("/createStore",upload.single("imageUrl"),createStore);
router.get("/getAllStore",getAllStore);
router.get("/getSingleStore",getSingleStore);
router.put("/updateStore/:id",updateStore);
router.put("/storeImage/:id",upload.single("imageUrl"),storeImage);
router.delete("/deleteStore/:id",deleteStore)

module.exports = router;