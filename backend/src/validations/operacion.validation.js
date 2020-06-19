const yup = require("yup");

const operacionSchema = yup.object().shape({
  operaciones: yup
    .string()
    .required('Campo obligatorio')
});

module.exports = operacionSchema;


