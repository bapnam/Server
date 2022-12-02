const multer = require("multer");
const sanPhamController = require("../controllers/SanPhamController");

const router = require("express").Router();

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("1111111: ", file.fieldname);
    cb(null, "publics/images");
  },
  filename: function (req, file, cb) {
    
    var i = file.originalname.lastIndexOf(".")
    var str = file.originalname.slice(i)
    var nameImg = file.originalname.slice(0, i) + str
    // console.log("LOG1: ", file);
    // console.log("LOG2: ", nameImg);
    cb(null, nameImg);
  },
});

var upload = multer({ storage: storage });

// ADD NXB
router.post("/add", upload.single("HinhAnh"), sanPhamController.addSanPham);

// UPDATE
router.put("/update/:id", sanPhamController.updateSanPham);

// DELETE
router.delete("/delete/:id", sanPhamController.deleteSanPham)

// GET ALL
router.get("/getall", sanPhamController.getAllSanPham);

//LOG---
module.exports = router;
