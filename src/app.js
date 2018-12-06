const connection = require('./config/config');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
// const Sequelize = require('sequelize');
var express = require('express');
const cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync();

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
