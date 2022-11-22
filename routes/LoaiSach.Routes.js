const loaiSachController = require("../controllers/LoaiSachController");

const router = require("express").Router();

// ADD Loai Sach
router.post("/add", loaiSachController.addLoaiSach);

// get all
router.get("/getall", loaiSachController.getAllLoaiSach);

//LOG---
module.exports = router;