const ModelUser = require('../models/model');

const UsuarioCtrl ={};


//Create
UsuarioCtrl.createUser = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
} 

//Consultar
UsuarioCtrl.getUsers = async (req ,res)=> {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
}

//Consultar por Id
UsuarioCtrl.getUniqueUser = async (req ,res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
}

//Actualizar
UsuarioCtrl.editUser= async (req ,res)=> {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta);
}


//Eliminar
UsuarioCtrl.deleteUser = async (req ,res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = UsuarioCtrl;