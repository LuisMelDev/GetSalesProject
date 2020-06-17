"use strict";
module.exports = (sequelize, DataTypes) => {
    const Inventario = sequelize.define(
        "inventarios",
        {
            producto_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            fecha_entrada: DataTypes.DATE,
            existencia_producto: DataTypes.INTEGER,
        },
        {}
    );
    Inventario.associate = function (models) {
        Inventario.belongsTo(models.productos, {
            foreignKey: "producto_id",
            as: "producto",
        });
        Inventario.belongsToMany(models.facturas, {
            through: models.detalle_factura,
            foreignKey: "producto_id",
            as: "facturas",
        });

        Inventario.belongsToMany(models.compras, {
            through: models.detalle_compra,
            foreignKey: "producto_id",
            as: "compras",
        });
    };
    return Inventario;
};
