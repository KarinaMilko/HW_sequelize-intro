const path = require("node:path");
const multer = require("multer");
const fs = require("node:fs");
const createHttpError = require("http-errors");
const { STATIC_IMAGES_PATH } = require("../constants");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.env.STATIC_FOLDER, "images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

function fileFilter(req, file, cb) {
  const MIMETYPE_REG_EXP = /^image\/(gif|png|jpeg|jpg)$/;

  cb(null, MIMETYPE_REG_EXP.test(file.mimetype));
}

const upload = multer({ storage, fileFilter });

module.exports.uploadPhonePhoto = upload.single("image");
