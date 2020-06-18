"use strict";
module.exports = (sequelize, DataTypes) => {
    const DetalleCompra = sequelize.define(
        "detalle_compra",
        {
            compra_id: {
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
