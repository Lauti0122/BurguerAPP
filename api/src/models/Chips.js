const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('chips', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size:{
        type: DataTypes.ENUM("small","medium","large"),
        allowNull: false,
    },
    images: {
    type: DataTypes.STRING,
    }
  },{
    timestamps: false,
});
};
