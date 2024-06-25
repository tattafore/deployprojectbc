const ModelEmpleado = require ('../models/empleado');

const empleadoCtrl ={};


//Create
empleadoCtrl.createEmp = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelEmpleado.create(body)
    res.send(respuesta)
} 

//Consultar
empleadoCtrl.getEmp = async (req ,res)=> {
    const respuesta = await ModelEmpleado.find({})
    res.send(respuesta)
}

//Consultar por Id
empleadoCtrl.getUniqueEmp = async (req ,res)=> {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById({_id:id})
    res.send(respuesta)
}

//Actualizar
empleadoCtrl.editEmp= async (req ,res)=> {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndUpdate({_id:id},body);
    res.send(respuesta);
}


//Eliminar
empleadoCtrl.deleteEmp = async (req ,res)=> {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = empleadoCtrl;