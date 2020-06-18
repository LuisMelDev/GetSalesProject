const yup = require("yup");

const bitacoraSchema = yup.object().shape({
  fecha:yup
    .date()
    .required(),
  operacion_id:yup
    .number()
    .integer()
    .positive()
    .required(),
   usuario_id:yup
    .number()
    .integer()
    .positive()
    .required()
});

module.exports = {
  bitacoraSchema
};
