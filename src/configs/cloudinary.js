const multer = require('multer');
const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: 'dkwoy0uvc',
  api_key: '544379545174719',
  api_secret: 'S7CsTPS8UH2IcGZRkPEkl6pwCsw'
});

// Cấu hình multer-storage-cloudinary
const storage = CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'avatars', // Tên thư mục lưu trữ trên Cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (cb) {
    cb(undefined, 'avatar'); // Đặt tên file là "avatar"
  }
});

// Tạo instance của multer và truyền storage engine vào
const upload = multer({ storage: storage });