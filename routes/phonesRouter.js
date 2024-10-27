const { Router } = require("express");
const { phonesController } = require("./../controllers");
const { upload } = require("../middleware");

const phonesRouter = Router();

phonesRouter
  .route("/")
  .post(phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route("/:phoneId")
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

phonesRouter.get("/:phoneId/preorders", phonesController.getPhonesPreorders);

phonesRouter.patch(
  "/:phoneId/images",
  upload.uploadPhonePhoto,
  phonesController.updateImage
);

module.exports = phonesRouter;
