const express = require('express');
const router = express.Router();
const {postDrink, getDrinks} = require("../controllers/drink"); 

router.post("/", postDrink);
router.get("/", getDrinks);
// router.get("/:id", getProductByID);
// router.put("/:id", updateProductByID);
module.exports = router;