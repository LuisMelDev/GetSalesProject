const yup = require("yup");

const detalleFacturaSchema = yup.object().shape({
    factura_id: yup.number().integer().positive().required(),
    producto_id: yup.number().integer().positive().required(),
    cantidad_producto: yup.number().integer().positive().required(),
    precio_producto: yup.number().positive().required(),
});

module.exports = detalleFacturaSchema;
