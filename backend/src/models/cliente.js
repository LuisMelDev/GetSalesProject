"use strict";
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define(
        "clientes",
        {
            cedula: DataTypes.STRING,
            nombre: DataTypes.STRING,
            direccion: DataTypes.STRING,
            fecha_nacimiento: DataTypes.DATE,
            telefono: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {}
    );
    Cliente.associate = function (models) {
        Cliente.hasMany(models.facturas, {
            foreignKey: "cliente_id",
            as: "facturas",
        });
    };
    return Cliente;
};
