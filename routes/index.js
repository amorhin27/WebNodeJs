var express = require('express');
var router = express.Router();

/* GET home page. (index.ejs)*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maestria en UNIR, herramientas de DevOps' });
});

/* GET Seccion (nosotros.ejs)*/
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos' });
});

/* GET Seccion (nosotros.ejs)*/
router.get('/producto', function(req, res, next) {
  res.render('producto', { title: 'Nuestros servicios' });
});

module.exports = router;
