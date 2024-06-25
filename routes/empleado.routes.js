const express =require ('express');
const router = express.Router();
const empleadoCtrl = require ('../controllers/empleado.controller');

router.get('/', empleadoCtrl.getEmp);
router.post('/', empleadoCtrl.createEmp);
router.get('/:id', empleadoCtrl.getUniqueEmp);
router.put('/:id',empleadoCtrl.editEmp);
router.delete('/:id', empleadoCtrl.deleteEmp);

module.exports = router;