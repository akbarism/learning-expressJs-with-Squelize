// const { users } = require('../models')
const model = require("../models/index");

module.exports = {
  insertUser: async function (req, res) {
    try {
      const { name, email, gender, phoneNumber } = req.body;
      const users = await model.users.create({
        name,
        email,
        gender,
        phone_number: phoneNumber,
      });
      if (users) {
        res.status(201).json({
          status: "OK",
          messages: "User berhasil ditambahkan",
          data: users,
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
  allUser: async function (req, res, next) {
    try {
      const users = await model.users.findAll({});
      if (users.length !== 0) {
        res.json({
          status: "ok",
          messages: "",
          data: users,
        });
      } else {
        res.json({
          status: "ERROR",
          mesages: "USERS EMPTY",
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
  viewUser: async function (req, res) {
    try {
      const usersId = req.params.id;
      const users = await model.users.findAll({
        where: {
          id: usersId,
        },
      });
      console.log(users.length)
      if (users.length) {
        res.json({
          status: "OK",
          messages: "success",
          data: users,
        });
      }else if(!users.length) {
        res.json({
            status: "failed",
            messages: "User tidak di temukan",
            data: users,
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
  deleteUser: async function (req, res, next) {
    try {
      const usersId = req.params.id;
      const users = await model.users.destroy({
        where: {
          id: usersId,
        },
      });
      if (users) {
        res.json({
          status: "OK",
          messages: "User berhasil dihapus",
          data: users,
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
