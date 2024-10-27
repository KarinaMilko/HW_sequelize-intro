const _ = require("lodash");
const createHttpError = require("http-errors");
const { Phone } = require("../models");

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    const prepatedPhone = _.omit(createdPhone.get(), [
      "updatedAt",
      "createdAt",
    ]);

    res.status(201).send({ data: prepatedPhone });
  } catch (error) {
    next(error);
  }
};
module.exports.getPhones = async (req, res, next) => {
  const {
    query: { page, results },
  } = req;

  const limit = results;
  const offset = (page - 1) * results;

  try {
    const foundPhones = await Phone.findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] },
      limit,
      offset,
      order: ["id"],
      raw: true,
    });
    res.status(200).send({ data: foundPhones });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  console.log("Retrieved phoneId:", phoneId);
  try {
    const foundPhone = await Phone.findByPk(phoneId, {
      raw: true,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!foundPhone) {
      return next(createHttpError(404, "Phone not Found"));
    }

    res.status(200).send({ data: foundPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const [, [updatedPhone]] = await Phone.update(body, {
      where: { id: phoneId },
      raw: true,
      returning: true,
    });
    if (!updatedPhone) {
      return next(createHttpError(404, "Phone Not Found"));
    }
    const prepatedPhone = _.omit(updatedPhone, ["createdAt", "updatedAt"]);
    res.status(200).send({ data: prepatedPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const deletedCount = await Phone.destroy({
      where: { id: phoneId },
    });
    if (deletedCount === 0) {
      return next(createHttpError(404, "Phone Not Found"));
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports.getPhonesPreorders = async (req, res, next) => {
  const { phoneId } = req.params;
  try {
    const foundPhone = await Phone.findByPk(phoneId);

    if (!foundPhone) {
      return next(createHttpError(404, "Phone Not Found"));
    }

    const foundPhones = await foundPhone.getPreorders({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      raw: true,
    });

    res.status(200).send({ data: foundPhones });
  } catch (error) {
    next(error);
  }
};

module.exports.updateImage = async (req, res, next) => {
  // console.log(req.body);
  // console.log(req.file);
  const {
    file,
    params: { phoneId },
  } = req;

  try {
    if (!file) {
      return next(createHttpError(422, "Image is Required"));
    }

    const [, [updatedPhone]] = await Phone.update(
      { image: "images/" + file.filename },
      { where: { id: phoneId }, returning: true, raw: true }
    );

    if (!updatedPhone) {
      return next(createHttpError(404, "Phone Not Found"));
    }

    const prepatedPhone = _.omit(updatedPhone, ["createdAt", "updatedAt"]);

    res.status(200).send({ data: prepatedPhone });
  } catch (error) {
    next(error);
  }
};
