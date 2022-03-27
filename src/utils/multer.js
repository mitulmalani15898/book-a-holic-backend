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
    console.log("IN MULTER");
    console.log(file);

    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
})
const upload = multer({ storage: storage });

module.exports = upload;