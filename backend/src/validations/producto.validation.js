const yup = require("yup");

const productoSchema = yup.object().shape({
  nombre: yup
    .string()
    .required('Campo obligatorio'),
  imagen: yup
    .string()
    .required(),
  amperaje_id:yup
    .number()
    .integer()
    .positive()
    .required(),
  grupo_id:yup
    .number()
    .integer()
    .positive()
    .required(),
  marca_id:yup
    .number()
    .integer()
    .positive()
    .required()
});

module.exports = productoSchema;

