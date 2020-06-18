const yup = require("yup");

const facturaSchema = yup.object().shape({
  cliente_id:yup
    .number()
    .integer()
    .positive()
    .required(),
   usuario_id:yup
    .number()
    .integer()
    .positive()
    .required(),
  fecha_entrada:yup
    .date()
    .required()
});

module.exports = {
  facturaSchema
};

