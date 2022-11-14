const KhachHangModel = require("../models/KhachHangModel");
const bcrypt = require("bcrypt");

const khachHangController = {
  // ADD KH or Dang ky
  addKhachHang: async (req, res) => {
    try {
      // hash mat khau
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.MatKhau, salt);

      const newKH = new KhachHangModel(req.body);
      newKH.MatKhau = hashed;

      const saveKH = await newKH.save();
      console.log("KH: ", newKH);

      res.status(200).json(saveKH);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  },

  // get KH or Dang nhap
  getAKhachHang: async (req, res) => {
    try {

      const kh = await KhachHangModel.findOne({ SDT: req.body.SDT });

      if (!kh) {
        return res.status(404).json("NoUser"); //Khong tim thay nguoi dung!!!
      }

      const pwd = await bcrypt.compare(req.body.MatKhau, kh.MatKhau);
      if (!pwd) {
        return res.status(404).json("NoPassword"); //Sai mat khau!!!
      }

      if (kh && pwd) {
        return res.status(200).json("Yes"); // Cho phep dang nhap
      }

    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
};

module.exports = khachHangController;
