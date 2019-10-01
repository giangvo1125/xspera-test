import uuid from 'node-uuid'
module.exports = function(sequelize, DataTypes) {
    var model = sequelize.define('products', {
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
        brand_id: {
            type: DataTypes.INTEGER, 
            unique: true, 

        }, 
        name: {
            type: DataTypes.TEXT, 
            unique: true, 
        }, 
        description: {
            type: DataTypes.TEXT, 
        }, 
        price: {
            type: DataTypes.FLOAT, 
        }, 
        color: {
            type: DataTypes.STRING, 
        }, 
        rating: {
            type: DataTypes.FLOAT, 
        }, 
        status: {
            type: DataTypes.ENUM, 
            values: ['In Stock', 'Out of Stock', 'Archived']
        }, 
        created_at: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: false,
        freezeTableName: true, 
        tableName: 'products', 
    })
    model.beforeCreate((data, options) => {
        return new Promise((resolve, reject) => {
            data.uuid = uuid.v4()
            resolve(data, options)
        })
    })
    model.associate = models => {
        model.belongsTo(models.brands, { foreignKey: 'brand_id' })
        model.hasMany(models.reviews, { foreignKey: 'product_id' })
    }
    
    return model
}