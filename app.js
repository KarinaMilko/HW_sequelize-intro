const express = require("express");
const { errorHandlers } = require("./middleware");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use("/api", router);
app.use(errorHandlers.errorHandler);

module.exports = app;

// для отримання переліку передзамовлень конкретного телефона
// GET /phones/:phoneId/preorders
//
// для отримання розширеного переліку передзамовлень, що для кожного замовлення
// буде також містити бренд, модель і колір телефона з цього передзамовлення
// GET /preorders
