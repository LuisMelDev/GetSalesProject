const yup = require("yup");

const grupoSchema = yup.object().shape({
  nombre: yup
    .string()
    .required()
});

module.exports = {
  grupoSchema
};

