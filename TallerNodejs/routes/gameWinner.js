const express = require("express");
const router = express.Router();

/*
 Creamos Documento gameWinner

 Get: solicitamos la información que queramos.
*/

/*
 Traemos el documento game

 Vamos a útilizar la informacion que hay en game.
*/
const User = require("../models/game");

router.get("/fffff-ggg-jjjjj/winner", function (req, res, next) {
  const data = User.find({
    
  });
 
 /*
 Informacion Data.

 Then (traemos la información correcta)

 Catch (muestra la informaión incorrecta)
*/     
  data
    .then((result) => {
      const juego = {
        id: "622419eed4194df9afb8042e",
        winner: "pedro",
      };
      res.json(juego);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
