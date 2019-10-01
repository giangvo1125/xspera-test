const Sequelize = require('sequelize')
const Op = Sequelize.Op
var config = {
    development: {
        db: {
            "username": "root",
            "password": "root",
            "database": "xspera",
            "host": "127.0.0.1",
            "port": 3306,
            "dialect": "mysql", 
            dialectOptions: {
                supportBigNumbers: true
            }, 
            freezeTableName: true, 
            logging: true, //disable console log queries
            operatorsAliases: {
                $and: Op.and,
                $or: Op.or,
                $eq: Op.eq,
                $gt: Op.gt,
                $lt: Op.lt,
                $lte: Op.lte,
                $like: Op.like
            }, 
        }, 
        port: 2025, 
    },  
    production: {
        db: {
            "username": "root",
            "password": "root",
            "database": "xspera",
            "host": "127.0.0.1",
            "port": 3306,
            "dialect": "mysql", 
            dialectOptions: {
                supportBigNumbers: true
            }, 
            freezeTableName: true, 
            logging: false, 
            operatorsAliases: {
                $and: Op.and,
                $or: Op.or,
                $eq: Op.eq,
                $gt: Op.gt,
                $lt: Op.lt,
                $lte: Op.lte,
                $like: Op.like
            }, 
        }, 
        port: 2024, 
    },  
}
const env = process.env.CONFIG || 'development'

module.exports = config[env]
