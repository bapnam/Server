const mongoose = require("mongoose");

// Create Khach Hang Schema
const KhachHangSchema = new mongoose.Schema(
  {
    MaKH: {
      type: String,
      required: true,
      unique: [true, 'Trùng mã Khách Hàng'],
    },
    HoTen: {
      type: String,
      required: true,
    },
    NgaySinh: {
      type: String,
    },
    SDT: {
      type: String,
      required: true,
      unique: true,
      length: 10,
    },
    DiaChi: [
      {
        TenDiaChi: { type: String, default: "Địa Chỉ 1" },
        TinhTP: { type: String },
        QuanHuyen: { type: String },
        XaPhuong: { type: String },
        ChiTiet: { type: String },
      },
    ],
    GioiTinh: {
      type: String,
      // required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    MatKhau: {
      type: String,
      required: true,
      minlength: 6,
    },
    TichDiem: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

let KhachHang = mongoose.model("KhachHang", KhachHangSchema);

module.exports = KhachHang;
