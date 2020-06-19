const yup = require("yup");

const inventarioSchema = yup.object().shape({
    producto_id: yup.number().integer().positive().required(),
    fecha_entrada: yup.date().required(),
    existencia_producto: yup.number().integer().required(),
});

module.exports = inventarioSchema;
