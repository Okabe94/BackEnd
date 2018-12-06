module.exports = (sequelize, DataTypes) =>
  sequelize.define('Vehiculo_multa', {
    codigo_vehiculo_multa: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo_multa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
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
    tableName: 'Vehiculo_multa',
    timestamps: false
  })
