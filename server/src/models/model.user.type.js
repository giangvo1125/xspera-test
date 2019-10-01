import uuid from 'node-uuid'
module.exports = function(sequelize, DataTypes) {
    var model = sequelize.define('user_type', {
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
        }, 
    }, {
        timestamps: false,
        freezeTableName: true, 
        tableName: 'user_type', 
    })
    model.beforeCreate((data, options) => {
        return new Promise((resolve, reject) => {
            data.uuid = uuid.v4()
            resolve(data, options)
        })
    })
    model.associate = models => {
        model.hasOne(models.users, { foreignKey: 'type_id' })
    }
    
    return model
}