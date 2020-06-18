"use strict";
module.exports = (sequelize, DataTypes) => {
    const DetalleFactura = sequelize.define(
        "detalle_factura",
        {
            factura_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            producto_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cantidad_producto: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            precio_producto: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },
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
