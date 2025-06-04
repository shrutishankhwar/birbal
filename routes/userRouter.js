const express = require("express");
const  router = express.Router();
const{
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
         } = require('../controller/userController');


 router.post("/createUser", createUser);
 
 router.get("/getAllUser", getAllUser);
 
 router.get("/getSingleUser", getSingleUser);

 router.put("/updateUser/:id",updateUser);
  
 router.delete("/deleteUser/:id",deleteUser),
    
 module.exports = router;