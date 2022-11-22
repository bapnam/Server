const nxbController = require("../controllers/NhaXuatBanController");

const router = require("express").Router();

// ADD NXB
router.post("/add", nxbController.addNXB);

// get all
router.get("/getall", nxbController.getAllNXB);


//LOG---
module.exports = router;