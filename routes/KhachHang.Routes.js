const khachHangController = require("../controllers/KhachHangController");

const router = require("express").Router();

// ADD KHACH HANG
router.post("/dangky", khachHangController.addKhachHang);
router.post("/dangnhap", khachHangController.getAKhachHang);


module.exports = router;