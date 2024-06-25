const express =require ('express');
const router = express.Router();
const UsuarioCtrl = require ('../controllers/usuario.controller');

router.get('/', UsuarioCtrl.getUsers);
router.post('/', UsuarioCtrl.createUser);
router.get('/:id', UsuarioCtrl.getUniqueUser);
router.put('/:id',UsuarioCtrl.editUser);
router.delete('/:id', UsuarioCtrl.deleteUser);

module.exports = router;