const path = require("node:path");
require("dotenv").config();

const STATIC_FOLDER = path.resolve(process.env.STATIC_FOLDER); // "public"
const STATIC_IMAGES_FOLDER = "images";

const CONSTANTS = {
  STATIC_PATH: path.resolve(STATIC_FOLDER), // "/abs_path/public"
  STATIC_IMAGES_FOLDER, // "images"
  STATIC_IMAGES_PATH: path.resolve(STATIC_FOLDER, STATIC_IMAGES_FOLDER), // "/abs_path/public/images"
};

module.exports = CONSTANTS;
