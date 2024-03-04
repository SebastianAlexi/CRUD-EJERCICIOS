// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

//                 /products
/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 
// Se deberán mostrar los productos separados en dos secciones. Los últimos
// visitados y los productos en oferta.

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
// Mostrará el formulario de creación para un producto

router.post('/create', productsController.store); 
// Deberá recibir los datos del formulario de creación.

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
// Botón MODIFICAR: modificará al producto correspondiente en la base de
// datos JSON.

router.put('/edit/:id', productsController.update); 
// Deberá recibir los datos del formulario de edición.

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 
// Botón BORRAR: eliminará al producto de la base de datos JSON.

module.exports = router;
