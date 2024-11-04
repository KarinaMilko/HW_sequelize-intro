const express = require("express");
const cors = require("cors");
const { errorHandlers } = require("./middleware");
const router = require("./routes");
const { STATIC_PATH } = require("./constants");

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
// app.use(express.static(path.resolve(process.env.STATIC_FOLDER)));
app.use(express.static(STATIC_PATH));
app.use("/api", router);
app.use(errorHandlers.errorHandler);

module.exports = app;

// для отримання переліку передзамовлень конкретного телефона
// GET /phones/:phoneId/preorders
//
// для отримання розширеного переліку передзамовлень, що для кожного замовлення
// буде також містити бренд, модель і колір телефона з цього передзамовлення
// GET /preorders
