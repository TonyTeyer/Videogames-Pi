const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, //(Universally Unique Identifier) es un valor alfanumérico que consta de 32 caracteres hexadecimales. Normalmente se representan en cinco grupos separados por guiones siguiendo el siguiente formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx donde cada x es un carácter hexadecimal(o-9, a-f).
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4 //la versión 4 de (Universally Unique Identifier) que trae un mejor cifrado.
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  },{timestamps: false});
};
