"use strict";
module.exports = (sequelize, DataTypes) => {
    const Compra = sequelize.define(
        "compras",
        {
            proveedor_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            timestamps: false,
        }
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
            through: models.detalle_compras,
            foreignKey: "compra_id",
            as: "productos",
        });
    };
    // Compra.afterCreate(async (compra, options) => {
    //     const usuario = await compra.getUsuario();
    //     return await sequelize.models.bitacora.create({
    //         fecha: new Date(),
    //         operacion_id: 1,
    //         usuario_id: usuario.id,
    //     });
    // });
    return Compra;
};
