"use strict";
module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define(
        "proveedores",
        {
            nombre: DataTypes.STRING,
        },
        {}
    );
    Proveedor.associate = function (models) {
        Proveedor.hasMany(models.compras, {
            foreignKey: "proveedor_id",
            as: "Compras",
        });
    };
    return Proveedor;
};
