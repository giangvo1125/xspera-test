import uuid from 'node-uuid'
module.exports = function(sequelize, DataTypes) {
    var model = sequelize.define('brands', {
        id: {
            allowNull: false, 
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        uuid: {
            type: DataTypes.UUID,
            unique: true, 
        }, 
        name: {
            type: DataTypes.TEXT, 
            unique: true, 
        }, 
        description: {
            type: DataTypes.TEXT, 
        }, 
    }, {
        timestamps: false,
        freezeTableName: true, 
        tableName: 'brands', 
    })
    model.beforeCreate((data, options) => {
        return new Promise((resolve, reject) => {
            data.uuid = uuid.v4()
            resolve(data, options)
        })
    })
    model.associate = models => {
        model.hasOne(models.products, { foreignKey: 'brand_id' })
    }
    
    return model
}