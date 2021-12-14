var tableName = 'user';
const base = require('./base');
class user extends base.sequelizeModel {};
const conn = base.connMysql;
const sequelize = base.sequelize;

function iniitialize(conn,sequelize) {
    return user.init({
        name:{
            type : sequelize.STRING(255),
            allowNull : false,
            field : 'acc'
            //primaryKey : true,
            //autoIncrement : true
        },
        pwd:{
            type : sequelize.STRING(64),
            allowNull : false,
            field : 'pwd'
            //primaryKey : true,
            //autoIncrement : true
        }
    },{
        sequelize : conn,
        freezeTableName : true,
        modelName : tableName,
        timestamps : false,
    });
}

var userModel = iniitialize(conn,sequelize);
module.exports = userModel;
