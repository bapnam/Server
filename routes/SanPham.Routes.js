const multer = require("multer");
const sanPhamController = require("../controllers/SanPhamController");

const router = require("express").Router();

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("1111111: ", file);
    cb(null, "publics/images");
  },
  filename: function (req, file, cb) {
    console.log("GAGGAG: ", file);
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});

var upload = multer({ storage: storage });

// ADD NXB
router.post("/add", upload.single("HinhAnh"), sanPhamController.addSanPham);

// UPDATE
router.put("/update/:id", sanPhamController.updateSanPham);

// GET ALL
router.get("/getall", sanPhamController.getAllSanPham);

//LOG---
module.exports = router;
