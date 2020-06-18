const yup = require("yup");

const proveedorSchema = yup.object().shape({
  nombre: yup
    .string()
    .required('Campo obligatorio'),
  rif: yup
    .string()
    .required('Campo obligatorio')
});

module.exports = {
  proveedorSchema
};

