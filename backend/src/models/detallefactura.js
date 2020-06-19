"use strict";
module.exports = (sequelize, DataTypes) => {
    const DetalleFactura = sequelize.define(
        "detalle_factura",
        {
            factura_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            producto_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cantidad_producto: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            precio_producto: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
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
    DetalleFactura.afterBulkCreate(async (datalles, options) => {
        detalles.forEach(async (detalleFactura) => {
            const inventario = await sequelize.models.inventario.findByPk(
                detalleFactura.producto_id
            );
            return await inventario.decrement("existencia_producto", {
                by: detalleFactura.cantidad_producto,
            });
        });
    });
    return DetalleFactura;
};
