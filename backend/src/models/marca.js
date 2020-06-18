"use strict";
module.exports = (sequelize, DataTypes) => {
    const Marca = sequelize.define(
        "marcas",
        {
            nombre: DataTypes.STRING,
        },
        {}
    );
    Marca.associate = function (models) {
        Marca.hasMany(models.productos, {
            foreignKey: "marca_id",
            as: "Productos",
        });
    };
    return Marca;
};
