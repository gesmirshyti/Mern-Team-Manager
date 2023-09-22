const PlayersController = require('../controllers/players.controller');

module.exports = (app)=>{
    app.post('/players',PlayersController.createPlayer);
    app.get('/players',PlayersController.getPlayer);
    app.delete('/players/:id',PlayersController.deleteOnePlayer);
    app.get('/players/:id', PlayersController.getOnePlayer);
    app.patch('/players/:id', PlayersController.updateOnePlayer);
}
