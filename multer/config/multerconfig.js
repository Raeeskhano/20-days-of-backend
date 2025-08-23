const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

//destination is used to determine within which folder the uploaded files should be stored. This can also be given as a string (e.g. '/tmp/uploads'). If no destination is given, the operating system's default directory for temporary files is used.
//filename is used to determine what the file should be named inside the folder. If no filename is given, each file will be given a random name that doesn't include any file extension.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    //crypto is node pakage which is used to generate random bytes
    crypto.randomBytes(10, (err, bytes) => {
      //in filename we convert buffer of bytes to hexadecimal string and then we add extension of original file using path.extname
      const filename = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, filename);
    });
  },
});

//we add this storage to multer and store in upload variable
const upload = multer({ storage: storage });

module.exports = upload;
