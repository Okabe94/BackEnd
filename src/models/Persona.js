module.exports = (sequelize, DataTypes) =>
  sequelize.define('Persona', {
    cedula: {
      primaryKey: true,
      type: DataTypes.STRING,
      unique: true
    },
    codigo_tipo_persona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carnet: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Persona',
    timestamps: false
  })
