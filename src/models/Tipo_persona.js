module.exports = (sequelize, DataTypes) =>
  sequelize.define('Tipo_persona', {
    codigo_tipo_persona: {
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
    tableName: 'Tipo_persona',
    deleteAt: false,
  })
