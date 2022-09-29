const express = require('express');
const router = express.Router();
const {postBurger,getBurgers} = require("../controllers/burger"); 

router.post("/", postBurger);
router.get("/", getBurgers);
// router.get("/:id", getProductByID);
// router.put("/:id", updateProductByID);
module.exports = router;