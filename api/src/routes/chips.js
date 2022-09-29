const express = require('express');
const router = express.Router();
const {postChips, getChips} = require("../controllers/chips"); 

router.post("/", postChips);
router.get("/", getChips);
// router.get("/:id", getProductByID);
// router.put("/:id", updateProductByID);
module.exports = router;