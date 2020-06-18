"use strict";
module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define(
        "proveedores",
        {
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rif: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
    Proveedor.associate = function (models) {
        Proveedor.hasMany(models.compras, {
            foreignKey: "proveedor_id",
            as: "Compras",
        });
    };
    return Proveedor;
};
