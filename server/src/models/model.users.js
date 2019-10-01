import uuid from 'node-uuid'
module.exports = function(sequelize, DataTypes) {
    var model = sequelize.define('users', {
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
        type_id: {
            type: DataTypes.INTEGER, 
            unique: true, 

        }, 
        username: {
            type: DataTypes.STRING, 
            unique: true, 
        }, 
        email: {
            type: DataTypes.STRING,
            unique: true,  
        }, 
        DOB: {
            type: DataTypes.STRING, 
        }, 
    }, {
        timestamps: false,
        freezeTableName: true, 
        tableName: 'users', 
    })
    model.beforeCreate((data, options) => {
        return new Promise((resolve, reject) => {
            data.uuid = uuid.v4()
            resolve(data, options)
        })
    })
    model.associate = models => {
        model.belongsTo(models.user_type, { foreignKey: 'type_id' })
        model.hasMany(models.reviews, { foreignKey: 'user_id' })
    }
    
    return model
}