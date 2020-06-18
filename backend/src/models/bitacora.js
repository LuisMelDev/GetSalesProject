"use strict";
module.exports = (sequelize, DataTypes) => {
    const Bitacora = sequelize.define(
        "bitacora",
        {
            fecha: {
                type: DataTypes.DATE,
                allowNull: false
            },
            operacion_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
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
