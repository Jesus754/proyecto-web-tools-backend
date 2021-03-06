const { Router } = require('express');
const router = Router();
const usuarioController = require('../Controller/usuarioController');
const { verificaToken, verificaAdminRol } = require('../middlewares/autenticacion')


router.post('/usuario',/*verificaToken*/ usuarioController.createUsuario);

router.put("/usuario/:id",verificaToken, usuarioController.updateUsuario);

router.get('/usuarios', [/*verificaToken,verificaAdminRol*/], usuarioController.getUsuarios);

router.get('/usuario/:id',[verificaToken,verificaAdminRol], usuarioController.getUsuario);

router.delete("/usuario/:id", usuarioController.deleteUsuario);

router.post('/usuario/pedido', usuarioController.createPedido);

router.get('/usuario/:id/pedidos', usuarioController.getPedidos);

router.post("/usuarios/createAll",/*[verificaToken,verificaAdminRol],*/ usuarioController.createAll);

router.delete("/usuarios/deleteAll",/*[verificaToken,verificaAdminRol]*/ usuarioController.deleteAll);

module.exports = router;