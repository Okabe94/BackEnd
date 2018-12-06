module.exports = (sequelize, DataTypes) =>
  sequelize.define('Multa', {
    codigo_multa: {
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
    tableName: 'Multa',
    timestamps: false
  })
