"use strict";
module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define(
        "roles",
        {
            rol:{
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {}
    );
    Rol.associate = function (models) {
        Rol.hasMany(models.usuarios, {
            foreignKey: "rol_id",
            as: "usuarios",
        });
    };
    return Rol;
};
