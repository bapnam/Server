const mongoose = require("mongoose");

const gioHang = new mongoose.Schema({
  KhachHangID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "KhachHang",
    required: true,
  },
  SanPham: [
    {
      SanPham_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SanPham",
      },
      SoLuong: {
        type: Number,
        default: 1,
      },
    },
  ],
});

let GioHang = mongoose.model("GioHang", gioHang);

module.exports = GioHang;
