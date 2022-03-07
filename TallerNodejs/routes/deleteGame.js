const express = require("express");
const router = express.Router();

/*
 Creamos Documento deleteGame

 Delete: Usamos la función ya sea para borrado lógico o físico.
*/

/*
 Traemos el documento game

 Vamos a útilizar la informacion que hay en game.
*/
const User = require("../models/game");

/*Borrar Juego */
router.delete("/:id", function (req, res, next) {
  User.findByIdAndDelete(req.params.id) //borrado físico
  // Borrado lógico con plugin

  //User.deleteById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
