const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('genre', {        
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            validate: {
                isUUID: 4,
            }
        }, name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
};