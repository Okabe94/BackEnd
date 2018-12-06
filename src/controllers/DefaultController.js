const sequelize = require('sequelize');
const Tipo_persona = require('../models');
module.exports = {
  async get (req, res) {
    const query = "SELECT * FROM Tipo_persona;";
    try {
      const result = await Tipo_persona.sequelize.query(query, { type: sequelize.QueryTypes.SELECT});
      res.send(result);
    } catch (err) {
      res.status(400).send('Ha ocurrido un error');
    }
  }
}
