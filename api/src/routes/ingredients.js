const express = require('express');
const router = express.Router();
const {postIngredients,getIngredients} = require("../controllers/ingredients"); 

router.post("/", postIngredients);
router.get("/", getIngredients);
// router.get("/:id", getProductByID);
// router.put("/:id", updateProductByID);
module.exports = router;