const tacGiaController = require("../controllers/TacGiaController");

const router = require("express").Router();

// ADD
router.post("/add", tacGiaController.addTacGia);

// GET
router.get("/getall", tacGiaController.getAllTacGia);

// UPDATE
// router.put("/update/:id", tacGiaController)
//LOG---
module.exports = router;
