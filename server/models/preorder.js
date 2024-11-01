"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Preorder.belongsTo(models.Phone, {
        foreignKey: {
          name: "phoneId",
          allowNull: false,
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Preorder.init(
    {
      orderDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isBefore: new Date().toISOString(),
        },
      },
      status: {
        type: DataTypes.ENUM("pending", "confirmed", "done"),
        allowNull: false,
        validate: {
          isIn: [["pending", "confirmed", "done"]],
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customerPhone: {
        type: DataTypes.STRING(13),
        unique: true,
        allowNull: false,
        validate: {
          is: /^\+380\d{9}$|^0\d{9}$/,
        },
      },
    },
    {
      sequelize,
      modelName: "Preorder",
      underscored: true,
    }
  );
  return Preorder;
};
