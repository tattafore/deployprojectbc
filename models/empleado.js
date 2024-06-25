const mongoose = require('mongoose');
const empleadoModel = new mongoose.Schema(
    {
        name: { type: String, require: true },
        position: { type: String, require: true },
        office: { type: String, require: true },
        salary: { type: Number, require: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelEmpleado = mongoose.model("empleados", empleadoModel);
module.exports = ModelEmpleado;