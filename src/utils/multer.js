// Author: Prit Thakkar (B00890731)
const multer = require("multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(file.originalname.includes("pdf")) {
      cb(null, './static/books')
    }else{
      cb(null,'./static/thumbnails')
    }
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage });

module.exports = upload;