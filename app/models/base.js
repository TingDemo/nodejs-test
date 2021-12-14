const sequelize = require('sequelize');
const sequelizeModel = sequelize.Model;
const connMysql = require('../../database/initSequelize');

module.exports.sequelize = sequelize;
module.exports.sequelizeModel = sequelizeModel;
module.exports.connMysql = connMysql;