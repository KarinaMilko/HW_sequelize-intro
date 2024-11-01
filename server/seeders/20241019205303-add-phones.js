"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "phones",
      [
        {
          model: "Galaxy S21",
          brand: "Samsung",
          realize_date: "2021-01-29",
          ram_size: 8,
          processor: "Exynos 2100",
          screen_size: 6.2,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "iPhone 13",
          brand: "Apple",
          realize_date: "2021-09-24",
          ram_size: 4,
          processor: "A15 Bionic",
          screen_size: 6.1,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "Pixel 6",
          brand: "Google",
          realize_date: "2021-10-28",
          ram_size: 8,
          processor: "Google Tensor",
          screen_size: 6.4,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "OnePlus 9",
          brand: "OnePlus",
          realize_date: "2021-03-23",
          ram_size: 12,
          processor: "Snapdragon 888",
          screen_size: 6.55,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "Xperia 5 III",
          brand: "Sony",
          realize_date: "2021-08-29",
          ram_size: 8,
          processor: "Snapdragon 888",
          screen_size: 6.1,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "Vivo X60",
          brand: "Vivo",
          realize_date: "2021-03-22",
          ram_size: 12,
          processor: "Exynos 1080",
          screen_size: 6.56,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "Mate 40 Pro",
          brand: "Huawei",
          realize_date: "2020-10-22",
          ram_size: 8,
          processor: "Kirin 9000",
          screen_size: 6.76,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "Nokia 8.3",
          brand: "Nokia",
          realize_date: "2020-12-15",
          ram_size: 8,
          processor: "Snapdragon 765G",
          screen_size: 6.81,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "Oppo Find X3",
          brand: "Oppo",
          realize_date: "2021-03-11",
          ram_size: 12,
          processor: "Snapdragon 888",
          screen_size: 6.7,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: "Redmi Note 10",
          brand: "Xiaomi",
          realize_date: "2021-03-16",
          ram_size: 6,
          processor: "Snapdragon 678",
          screen_size: 6.43,
          is_nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("phones", null, {});
  },
};