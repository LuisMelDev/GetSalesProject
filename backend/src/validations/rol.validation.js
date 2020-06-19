const yup = require("yup");

const rolSchema = yup.object().shape({
  rol: yup
    .string()
    .required('Campo obligatorio')
});

module.exports = rolSchema;


