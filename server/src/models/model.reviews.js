import uuid from 'node-uuid'
module.exports = function(sequelize, DataTypes) {
    var model = sequelize.define('reviews', {
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
        product_id: {
            type: DataTypes.INTEGER, 
            unique: true, 

        }, 
        user_id: {
            type: DataTypes.INTEGER, 
            unique: true, 

        }, 
        rating: {
            type: DataTypes.FLOAT, 
        }, 
        comment: {
            type: DataTypes.TEXT, 
        }, 
    }, {
        timestamps: false,
        freezeTableName: true, 
        tableName: 'reviews', 
    })
    model.beforeCreate((data, options) => {
        return new Promise((resolve, reject) => {
            data.uuid = uuid.v4()
            resolve(data, options)
        })
    })
    model.associate = models => {
        model.belongsTo(models.users, { foreignKey: 'user_id' })
        model.belongsTo(models.products, { foreignKey: 'product_id' })
    }
    
    return model
}