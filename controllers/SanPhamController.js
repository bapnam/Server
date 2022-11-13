const sanPhamModel = require("../models/SanPhamModel");
const tacGiaModel = require("../models/TacGiaModel");
const nxbModel = require("../models/NhaXuatBanModel");

const sanPhamController = {
  // ADD San Pham
  addSanPham: async (req, res) => {
    try {
      

      const book = {
        TenSanPham: req.body.TenSanPham,
        NXB: req.body.NXB,
        TacGia: req.body.TacGia,
        SoLuong: req.body.SoLuong,
        LoaiSach: req.body.LoaiSach,
        Gia: req.body.Gia,
        HinhAnh: "",
        MoTa: req.body.MoTa,
      };
      const newSP = new sanPhamModel(book);
      const save = await newSP.save();

      // if (req.body.TacGia) {
      //   const tg = await tacGiaModel.findById(req.body.TacGia);
      //   await tg.updateOne({ $push: { TacPham: newSP._id } }); // push vi la array
      // }
      // if (req.body.NXB) {
      //   const nxb = await nxbModel.findById(req.body.NXB);
      //   await nxb.updateOne({ $push: { SanPham: newSP._id } });
      // }

      res.status(200).json(save);
    } catch (error) {
      console.log(error);
      res.status(500).json("CO LOI KHI THEM: ", error);
    }
  },

  // UPDATE
  updateSanPham: async (req, res) => {
    try {
      const sp = await sanPhamModel.findById(req.params.id);
      await sp.updateOne({ $set: req.body });
      res.status(200).json("updated");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // DELETE
  deleteSanPham: async (req, res) => {
    try {
      await sanPhamModel.findByIdAndDelete();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Get All San Pham
  getAllSanPham: async (req, res) => {
    try {
      const books = await sanPhamModel
        .find()
        .populate("TacGia", ['TenTacGia'])
        .populate("NXB", ['TenNXB'])
        .populate("LoaiSach", ['TenLoaiSach']);
      
      res.status(200).json(books);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Lay San Pham Theo ID
  getSanPhamByID: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Lay San Pham Theo Tac Gia
  getSanPhamByTacGia: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Lay San Pham Theo Gia
  getSanPhamByGia: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Lay San Pham Theo NXB
  getSanPhamByNXB: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Lay San Pham Theo Loai Sach
  getSanPhamByLoaiSach: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Lay San Pham Theo So Luong
  getSanPhambySoLuong: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = sanPhamController;
