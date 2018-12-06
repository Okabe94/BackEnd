module.exports = (sequelize, DataTypes) =>
  sequelize.define('Vehiculo', {
    placa: {
      primaryKey: true,
      type: DataTypes.STRING,
      unique: true
    },
    codigo_tipo_vehiculo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Vehiculo',
    timestamps: false
  })

    