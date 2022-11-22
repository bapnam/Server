const gioHangController = require("../controllers/GioHangController");

const router = require("express").Router();

// ADD
router.post("/add", gioHangController.addGioHang);

router.put("/update", gioHangController.updateGioHang);

router.get("/getall", gioHangController.getAllGioHang);
router.post("/getbyidkh", gioHangController.getOneGioHang);


//LOG---
module.exports = router;