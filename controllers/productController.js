// const { products } = require('../models')
const model = require("../models/index");

module.exports = {
  insertProduct: async function (req, res) {
    try {
      const input = req.body;
      input.image = `http://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`;
      const product = await model.product.create(input);
      if (product) {
        res.status(201).json({
          status: "OK",
          messages: "Product berhasil ditambahkan",
          data: product,
        });
      }
    } catch (err) {
      res.status(400).json({
        status: "ERROR",
        messages: err.errors[0].message,
        data: {},
      });
    }
  },
  allProduct: async function (req, res, next) {
    try {
      const product = await model.product.findAll({});
      if (product.length !== 0) {
        res.json({
          status: "ok",
          messages: "",
          data: product,
        });
      } else {
        res.json({
          status: "ERROR",
          mesages: "product EMPTY",
          data: {},
        });
      }
    } catch (err) {
      res.json({
        status: "ERROR",
        messages: err.message,
        data: {},
      });
    }
  },
  viewProduct: async function (req, res) {
    try {
      const productId = req.params.id;
      const product = await model.product.findAll({
        where: {
          id: productId,
        },
      });
      console.log(product.length);
      if (product.length) {
        res.json({
          status: "OK",
          messages: "success",
          data: product,
        });
      } else if (!product.length) {
        res.json({
          status: "failed",
          messages: "User tidak di temukan",
          data: product,
        });
      }
    } catch (err) {
      res.status(400).json({
        status: "ERROR",
        messages: err.message,
        data: {},
      });
    }
  },
  deleteProduct: async function (req, res, next) {
    try {
      const productId = req.params.id;
      const product = await model.product.destroy({
        where: {
          id: productId,
        },
      });
      if (product) {
        res.json({
          status: "OK",
          messages: "User berhasil dihapus",
          data: product,
        });
      }
    } catch (err) {
      res.status(400).json({
        status: "ERROR",
        messages: err.message,
        data: {},
      });
    }
  },
};
