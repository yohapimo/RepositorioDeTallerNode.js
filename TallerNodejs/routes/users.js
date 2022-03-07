const express = require("express");
const router = express.Router();

/*
 Traemos el documento game

 Vamos a útilizar la informacion que hay en game.
*/
const User = require("../models/game");

router.get("/fffff-ggg-jjjjj", function (req, res, next) {
  const data = User.find({
    $or: [
      { deleted: { $eq: false } }, //
      { deleted: { $exists: false } },
    ],
  });

/*
 Informacion Data.

 Then (traemos la información correcta)

 Catch (muestra la informaión incorrecta)
*/  
  data
    .then((result) => {
      const juego = {
        id: "fffff-ggg-jjjjj",
        gamers: result,
        inProgress: false,
      };
      res.json(juego);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
