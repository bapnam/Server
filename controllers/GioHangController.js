const gioHangModel = require("../models/GioHangModel");

const gioHangController = {
  // ADD
  addGioHang: async (req, res) => {
    try {
      const newGH = new gioHangModel(req.body);
      const save = await newGH.save();
      res.status(200).json(save);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // UPDATE
  updateGioHang: async (req, res) => {
    try {
      const gh = await gioHangModel.findById(req.params.id);
      await gh.updateOne({ $push: { SoLuong: saveBook._id } });
      res.status(200).json("Updated");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // GET All
  getAllGioHang: async (req, res) => {
    try {
      const gh = await gioHangModel.find();
      res.status(200).json(gh);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // GET 1
  getOneGioHang: async (req, res) => {
    try {
      const gh = await gioHangModel
        .find({ KhachHangID: req.body.KhachHangID })
        .populate("KhachHangID", ["HoTen"])
        .populate({ path: "SanPham", populate: "SanPham_ID" });
      res.status(200).json(gh);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = gioHangController;
