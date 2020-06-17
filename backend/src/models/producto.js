"use strict";
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define(
        "productos",
        {
            nombre: DataTypes.STRING,
            imagen: DataTypes.STRING,
            amperaje_id: DataTypes.INTEGER,
            grupo_id: DataTypes.INTEGER,
            marca_id: DataTypes.INTEGER,
        },
        {}
    );
    Producto.associate = function (models) {
        Producto.belongsTo(models.amperajes, {
            foreignKey: "amperaje_id",
            as: "amperaje",
        });
        Producto.belongsTo(models.grupos, {
            foreignKey: "grupo_id",
            as: "grupo",
        });
        Producto.belongsTo(models.marcas, {
            foreignKey: "marca_id",
            as: "marca",
        });

        Producto.hasOne(models.inventarios, {
            foreignKey: "producto_id",
            as: "inventario",
        });
    };

    return Producto;
};
