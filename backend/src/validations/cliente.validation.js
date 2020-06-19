const yup = require("yup");

const clienteSchema = yup.object().shape({
    cedula: yup.string().required(),
    nombre: yup.string().required(),
    direccion: yup.string().required(),
    fecha_nacimiento: yup.date().required(),
    telefono: yup.string().required(),
    email: yup.string().email("Email no válido").required(),
});

module.exports = clienteSchema;
