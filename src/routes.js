const DefaultController = require('./controllers/DefaultController');

module.exports = (app) => {

  app.get('/', DefaultController.get); 

}
