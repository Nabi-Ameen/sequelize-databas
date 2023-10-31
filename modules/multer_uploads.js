const multer = require("multer");

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, callback) => {
        callback(null, `img${Date.now()}${file.originalname}`);
    },
  });
  
  const upload = multer({ storage });
  
  

module.exports = { upload };
