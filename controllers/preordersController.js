const { Phone, Preorder } = require("../models");

module.exports.getPreorders = async (req, res, next) => {
  try {
    const foundPreorders = await Preorder.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Phone,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
      raw: true,
    });
    res.status(200).send({ data: foundPreorders });
  } catch (error) {
    next(error);
  }
};
