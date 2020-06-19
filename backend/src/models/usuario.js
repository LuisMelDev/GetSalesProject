"use strict";
const { hashSync, compareSync, genSaltSync } = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "usuarios",
        {
            rol_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
    // relaciones
    Usuario.associate = function (models) {
        Usuario.belongsTo(models.roles, {
            foreignKey: "rol_id",
            sourceKey: "id",
            as:'rol'
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

    // hooks
    Usuario.beforeCreate(async (usuario, options) => {
        const salt = await genSaltSync();
        const hashedPassword = await hashSync(usuario.password, salt);
        usuario.password = hashedPassword;
    });

    Usuario.prototype.validPassword = async function(password){
        return await compareSync(password, this.password);
    };

    return Usuario;
};
