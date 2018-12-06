module.exports = (sequelize, DataTypes) =>
  sequelize.define('Transaccion', {
    codigo: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo_sector: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Transaccion',
    createdAt: 'FechaEntrada',
    updatedAt: 'FechaSalida'
  })
