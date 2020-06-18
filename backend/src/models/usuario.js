"use strict";
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "usuarios",
        {
            rol_id: DataTypes.INTEGER,
            nombre: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {}
    );
    Usuario.associate = function (models) {
        Usuario.belongsTo(models.roles, {
            foreignKey: "rol_id",
            sourceKey: "id",
        });
        Usuario.hasMany(models.compras, {
            foreignKey: "usuario_id",
            as: "Compras",
        });
        Usuario.hasMany(models.facturas, {
            foreignKey: "usuario_id",
            as: "Facturas",
        });
        Usuario.belongsToMany(models.operaciones, {
            through: models.bitacora,
            as: "operaciones",
            foreignKey: "usuario_id",
        });
    };
    return Usuario;
};
