"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Phone.hasMany(models.Preorder, {
        foreignKey: {
          name: "phoneId",
          allowNull: false,
        },
        onUpdate: "CASCSDE",
        onDelete: "CASCADE",
      });
    }
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      brand: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      realizeDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      ramSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 2,
        },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [2, 50],
        },
      },
      screenSize: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true,
          min: 2,
        },
      },
      isNfc: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Phone",
      underscored: true,
    }
  );
  return Phone;
};
