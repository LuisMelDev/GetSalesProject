"use strict";
module.exports = (sequelize, DataTypes) => {
    const Compra = sequelize.define(
        "compras",
        {
            proveedor_id: DataTypes.INTEGER,
            usuario_id: DataTypes.INTEGER,
            fecha: DataTypes.DATE,
        },
        {}
    );
    Compra.associate = function (models) {
        Compra.belongsTo(models.proveedores, {
            foreignKey: "proveedor_id",
            as: "proveedor",
        });
        Compra.belongsTo(models.usuarios, {
            foreignKey: "usuario_id",
            as: "usuario",
        });
        Compra.belongsToMany(models.inventarios, {
            through: models.detalle_compra,
            foreignKey: "compra_id",
            as: "productos",
        });
    };
    return Compra;
};
