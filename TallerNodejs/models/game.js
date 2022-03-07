const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
 Usamos la expresión regular para definir el id: fffff-ggg-jjjjj
*/
const validateid = (id) => {
  const regex = /^([a-z]+-{0,1})+([a-z]+)+$/;
  return regex.test(id);
};

/*
 Esquema de nombre game.

 Tipos de datos: Id, Type, Nombre.
*/
const userSchema = new Schema(
  {
    id: {
      type: String,
      trim: true,
      required: [true, "El id es requerido"],
      lowercase: true,
      unique: true,
      validate: {
        validator: validateid,
        message: "Por favor digite un id válido",
      },
    },
    type: {
      type: String,
      trim: true,
    },
    gamers: [
      {
        type: String,
        trim: true,
        required: [true, "El nombre del jugador es requerido"],
      },
    ],
    gamerBet: [
      {
        type: String,
        trim: true,
      },
    ],
  },

  { timestamps: true }
);

/*
 Exportar invoca a UserSquema.

*/
module.exports = Game = mongoose.model("Game", userSchema);
