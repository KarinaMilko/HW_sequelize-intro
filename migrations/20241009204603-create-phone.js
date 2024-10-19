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
      realizeDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ramSize: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      screenSize: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      isNfc: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("phones", {
      fields: ["realizeDate"],
      type: "check",
      where: {
        realizeDate: {
          [Sequelize.Op.lte]: Sequelize.literal("CURRENT_DATE"),
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("phones");
  },
};
