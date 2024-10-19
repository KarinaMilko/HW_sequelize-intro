const { Router } = require("express");

const phonesRouter = Router();

phonesRouter
  .route("/")
  .post(() => {})
  .get((req, res, next) => {
    res.status(501).send("Not Implemented phones");
  });

phonesRouter
  .route("/:phoneId")
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = phonesRouter;
