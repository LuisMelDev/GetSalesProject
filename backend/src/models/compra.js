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
    Compra.afterCreate(async (compra, options) => {
        return await sequelize.models.bitacoras.create({
            fecha: Date.now(),
            operacion_id: 1,
            usuario_id: compra.getUsuario().id,
        });
    });
    return Compra;
};
