"use strict";
module.exports = (sequelize, DataTypes) => {
    const DetalleFactura = sequelize.define(
        "detalle_factura",
        {
            factura_id: DataTypes.INTEGER,
            producto_id: DataTypes.INTEGER,
            cantidad_producto: DataTypes.INTEGER,
            precio_producto: DataTypes.DOUBLE,
        },
        {}
    );
    DetalleFactura.associate = function (models) {
        DetalleFactura.belongsTo(models.facturas, {
            foreignKey: "factura_id",
            as: "factura",
        });
        DetalleFactura.belongsTo(models.productos, {
            foreignKey: "producto_id",
            as: "producto",
        });
    };
    return DetalleFactura;
};
