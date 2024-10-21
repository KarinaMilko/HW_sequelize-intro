"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("phones", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      realize_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ram_size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      screen_size: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      is_nfc: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
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
    await queryInterface.addConstraint("phones", {
      fields: ["realize_date"],
      type: "check",
      where: {
        realize_date: {
          [Sequelize.Op.lte]: Sequelize.literal("CURRENT_DATE"),
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("phones");
  },
};
