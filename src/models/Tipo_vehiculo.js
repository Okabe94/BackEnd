module.exports = (sequelize, DataTypes) =>
  sequelize.define('Tipo_vehiculo', {
    codigo_tipo_vehiculo: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Tipo_vehiculo',
    timestamps: false
  })
