import fs from 'fs-extra'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../../config'
const basename = path.basename(module.filename)
const { NODE_ENV } = process.env || 'development'
const db = {}

let sequelize = new Sequelize(
    config.db.database, config.db.username, config.db.password, config.db
)

fs.readdirSync(__dirname).filter((file) => {
	if(file != 'init')
    	return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
}).forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
})

Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db