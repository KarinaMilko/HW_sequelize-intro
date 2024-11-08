const http = require("node:http");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";

const httpServer = http.createServer(app);
httpServer.listen(PORT, HOST, () =>
  console.log(`Server is listening http://${HOST}:${PORT}`)
);

// const { Op } = require("sequelize");
// const { sequelize, Phone } = require("./models");

// sequelize
//   .sync({ force: true })
//   .then(() => console.log("Sync OK"))
//   .catch((err) => console.log(err));

// async function () {
//   try {
//     // const currentYear = new Date().getFullYear();
//     // const phones = {
//     //   model: "	Xiaomi",
//     //   brand: "Mi12",
//     //   realizeDate: "2023-03-11",
//     //   ramSize: 8,
//     //   processor: "Android",
//     //   screenSize: 6.7,
//     //   isnfc: true,
//     // };
//     // npx sequelize model:create --name Phone --attributes model:string,brand:string,realizeDate:dateonly,ramSize:integer,processor:string,screenSize:float,isNfc:boolean
//     // додавання нового телефону
//     // const createPhone = await Phone.create(phones);
//     // console.log(createPhone.get());
//     // отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на
//     // сторінці, упорядкованих за роком виробництва)
//     // const foundPhones = await Phone.findAll({
//     //   order: ["realizeDate"],
//     //   limit: 4,
//     //   offset: 8,
//     //   raw: true,
//     // });
//     // console.log(foundPhones);
//     // *отримання списку телефонів поточного року видання
//     // const phonesThisYear = await Phone.findAll({
//     //   where: {
//     //     realizeDate: {
//     //       [Op.between]: [
//     //         new Date(currentYear, 0, 1),
//     //         new Date(currentYear, 11, 31),
//     //       ],
//     //     },
//     //   },
//     //   raw: true,
//     // });
//     // console.log(phonesThisYear);
//     // *отримання списку телефонів старше 2022 року випуску
//     // const foundPhones = await Phone.findAll({
//     //   where: {
//     //     realizeDate: {
//     //       [Op.gte]: ["2022-01-01"],
//     //     },
//     //   },
//     //   raw: true,
//     // });
//     // console.log(foundPhones);
//     // оновлення: змінити розмір оперативної пам'яті телефону з id: 1
//     // const updatedPhones = await Phone.update(
//     //   { ramSize: 6 },
//     //   {
//     //     where: { id: 1 },
//     //     returning: true,
//     //     raw: true,
//     //   }
//     // );
//     // console.log(updatedPhones);
//     // *оновлення: додати нфс всім телефонам 2023 року випуску,
//     // const updatedPhones = await Phone.update(
//     //   { isnfc: true },
//     //   {
//     //     where: {
//     //       realizeDate: {
//     //         [Op.between]: ["2021-01-01", "2021-12-31"],
//     //       },
//     //     },
//     //     returning: true,
//     //     raw: true,
//     //   }
//     // );
//     // console.log(updatedPhones);
//     // видалення телефону з id: 2.
//     // const deletedPhone = await Phone.destroy({ where: { id: 2 } });
//     // console.log(deletedPhone);
//     // *видалення телефонів 2015 року випуску.
//     // const deletedPhone = await Phone.destroy({
//     //   where: {
//     //     realizeDate: {
//     //       [Op.between]: ["2020-01-01", "2020-12-31"],
//     //     },
//     //   },
//     // });
//     // console.log(deletedPhone);
//     // **вивести середній розмір оперативної пам'яті телефонів
//     // const foundPhones = await Phone.findAll({
//     //   attributes: [sequelize.fn("AVG", sequelize.col("ramSize"))],
//     //   raw: true,
//     // });
//     // console.log(foundPhones);
//     // **вивести кількість телефонів кожної марки.
//     // const foundPhones = await Phone.findAll({
//     //   attributes: ["brand", sequelize.fn("COUNT", sequelize.col("id"))],
//     //   group: "brand",
//     //   raw: true,
//     // });
//     // console.log(foundPhones);
//     // **вивести бренди, у телефонів яких максимальна діагональ більше за 6.6
//     // const foundPhones = await Phone.findAll({
//     //   attributes: ["model", sequelize.fn("COUNT", sequelize.col("id"))],
//     //   where: {
//     //     screenSize: {
//     //       [Op.gte]: 6.6,
//     //     },
//     //   },
//     //   group: "model",
//     //   raw: true,
//     // });
//     // console.log(foundPhones);
//   } catch (err) {
//     console.log(err);
//   }
// }();
