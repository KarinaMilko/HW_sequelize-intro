const { Router } = require("express");
const phonesRouter = require("./phonesRouter");

const router = Router();

router.use("/phones", phonesRouter);

module.exports = router;
