"use strict";
module.exports = (sequelize, DataTypes) => {
    const Amperaje = sequelize.define(
        "amperajes",
        {
            amp: DataTypes.INTEGER,
        },
        {}
    );
    Amperaje.associate = function (models) {
        Amperaje.hasMany(models.productos, {
            foreignKey: "amperaje_id",
            as: "productos",
        });
    };
    return Amperaje;
};
