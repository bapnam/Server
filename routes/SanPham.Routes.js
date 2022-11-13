const sanPhamController = require("../controllers/SanPhamController");

const router = require("express").Router();

// ADD NXB
router.post("/add", sanPhamController.addSanPham);

// UPDATE
router.put("/update/:id", sanPhamController.updateSanPham);

// GET ALL
router.get("/getall", sanPhamController.getAllSanPham);

//LOG---
module.exports = router;