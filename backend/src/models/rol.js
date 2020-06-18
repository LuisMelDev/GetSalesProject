"use strict";
module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define(
        "roles",
        {
            rol: DataTypes.STRING,
        },
        {}
    );
    Rol.associate = function (models) {
        Rol.hasMany(models.usuarios, {
            foreignKey: "rol_id",
            as: "Usuarios",
        });
    };
    return Rol;
};
