"use strict";
module.exports = (sequelize, DataTypes) => {
    const Operacion = sequelize.define(
        "operaciones",
        {
            operaciones: DataTypes.STRING,
        },
        {}
    );
    Operacion.associate = function (models) {
        Operacion.belongsToMany(models.usuarios, {
            through: models.bitacora,
            as: "usuarios",
            foreignKey: "operacion_id",
        });
    };
    return Operacion;
};
