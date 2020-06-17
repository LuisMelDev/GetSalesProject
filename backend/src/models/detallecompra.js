"use strict";
module.exports = (sequelize, DataTypes) => {
    const DetalleCompra = sequelize.define(
        "detalle_compra",
        {
            compra_id: DataTypes.INTEGER,
            producto_id: DataTypes.INTEGER,
            cantidad_producto: DataTypes.INTEGER,
            precio_producto: DataTypes.DOUBLE,
        },
        {}
    );
    DetalleCompra.associate = function (models) {
        DetalleCompra.belongsTo(models.compras, {
            foreignKey: "compra_id",
            as: "compra",
        });
        DetalleCompra.belongsTo(models.productos, {
            foreignKey: "producto_id",
            as: "producto",
        });
    };
    return DetalleCompra;
};
