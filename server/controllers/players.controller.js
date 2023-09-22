const Player = require("../models/players.model");

module.exports = {
    createPlayer :(req,res) =>{
        const{name,position}= req.body;
        Player.create(
            {
                name:name,
                position : position
            }
        )
        .then((player)=>{res.json(player)})
        .catch((err)=>res.status(400).json(err));
    },

    getPlayer: (req,res )=>{
        Player.find({})
        .then((players) => {
            res.json(players);
            console.log(players);
        })
        .then((err)=>{
            console.log(err);
        });
    },
    getOnePlayer: (req, res) => {
        Player.findOne({ _id: req.params.id })
          .then((player) => {
            console.log(player);
            res.json(player);
          })
          .catch((err) => {
            console.log(err);
            res.json(err);
          });
      },

    deleteOnePlayer: (req,res) =>{
        Player.deleteOne({_id: req.params.id})
        .then((player) =>{
            console.log(player);
            res.json(player);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
          });
    },

    updateOnePlayer: (request, response) => {
        Player.findOneAndUpdate({ _id: request.params.id }, request.body, {
          new: true,
        })
          .then((result) => response.json(result))
          .catch((err) => response.json(err));
      }
    };



