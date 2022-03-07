const express = require('express');
const router = express.Router();

/*
 * Index.
 *
 * Página principal localhost:8080
 *
 * @version 01.01.01 2022-06-03
 *
 * @author Yon Hawer Piñeros - yon.pineros@gmail.com
 *
 * @since Presente desde la versión 01
 */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taller Node.js' });
});

module.exports = router;
