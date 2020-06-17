"use strict";
module.exports = (sequelize, DataTypes) => {
    const Bitacora = sequelize.define(
        "bitacora",
        {
            fecha: DataTypes.DATE,
            operacion_id: DataTypes.INTEGER,
            usuario_id: DataTypes.INTEGER,
        },
        {}
    );
    Bitacora.associate = function (models) {
        Bitacora.belongsTo(models.operaciones, {
            foreignKey: "operacion_id",
            as: "operacion",
        });
        Bitacora.belongsTo(models.usuarios, {
            foreignKey: "usuario_id",
            as: "usuario",
        });
    };
    return Bitacora;
};
