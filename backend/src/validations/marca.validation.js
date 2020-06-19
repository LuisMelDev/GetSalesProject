const yup = require("yup");

const marcaSchema = yup.object().shape({
    nombre: yup.string().required(),
});

module.exports = marcaSchema;
