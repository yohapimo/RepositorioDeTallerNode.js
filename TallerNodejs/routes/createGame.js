const express = require("express");
const router = express.Router();

/*
 Creamos Documento createGame

 Post: registramos los tipos de datos.
*/

/*
 Traemos el documento game

 Vamos a útilizar la informacion que hay en game.
*/
const User = require("../models/game");

/* Crear Juego */
router.post("/", function (req, res, next) {
  const user = new User({
    id: req.body.id,
    type: req.body.type,
    gamers: req.body.gamers,
  });

/*
 Informacion User.

 Then (traemos la información correcta)

 Catch (muestra la informaión incorrecta)
*/    
  user
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
