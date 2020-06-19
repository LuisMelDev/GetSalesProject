const yup = require("yup");

const facturaSchema = yup.object().shape({
    cliente_id: yup.number().integer().positive().required(),
    usuario_id: yup.number().integer().positive().required(),
});

module.exports = facturaSchema;
