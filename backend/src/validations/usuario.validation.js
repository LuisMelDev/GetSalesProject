const yup = require("yup");

const usuarioSchema = yup.object().shape({
  rol_id: yup
    .number()
    .integer()
    .positive()
    .required(),
  nombre: yup
    .string()
    .required(),
  username: yup
    .string()
    .required(),
  password: yup
    .string()
    .required() 
    .min(8, 'Contraseña muy corta - debe ser de 8 carácteres como mínimo.')
    .max(12, 'Contraseña muy larga - Maximo 12 carácteres'),
  email: yup
    .string()
    .email()
    .required()
});

module.exports = usuarioSchema;

