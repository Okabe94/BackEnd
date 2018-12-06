const Sequelize = require('sequelize');
const connection = require('../config/config');
const db = {};

const sequelize = new Sequelize(
  connection.db,
  connection.user,
  connection.password,
  connection.options
);

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
