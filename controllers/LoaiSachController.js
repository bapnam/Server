const loaiSachModel = require("../models/LoaiSachModel");

const loaiSachController = {
  // ADD Loai Sach
  addLoaiSach: async (req, res) => {
    try {
      const newLoaiSach = new loaiSachModel(req.body);
      const saveLoaiSach = await newLoaiSach.save();
      res.status(200).json(saveLoaiSach);
    } catch (error) {
      console.log(error);
      res.status(500).json("Loi them loai sach", error);
    }
  },

  // get All
  getAllLoaiSach: async (req, res) => {
    try {
      const dsLoaiSach = await loaiSachModel.find();
      res.status(200).json(dsLoaiSach);
    } catch (error) {
      console.log(error);
      res.status(500).json("Loi getAllLoaiSach", error);
    }
  },
};

module.exports = loaiSachController;
