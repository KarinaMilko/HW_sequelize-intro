"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("preorders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("pending", "confirmed", "done"),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      customer_phone: {
        type: Sequelize.STRING(13),
        unique: true,
        allowNull: false,
      },
      phone_id: {
        type: Sequelize.INTEGER,
        references: { model: "phones", key: "id" },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("preorders", {
      fields: ["customer_phone"],
      type: "check",
      where: {
        customer_phone: {
          [Sequelize.Op.regexp]: "^\\+380\\d{9}$|^0\\d{9}$",
        },
      },
    });
    await queryInterface.addConstraint("preorders", {
      fields: ["order_date"],
      type: "check",
      where: {
        order_date: {
          [Sequelize.Op.lte]: Sequelize.literal("CURRENT_DATE"),
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("preorders");
  },
};
