"use strict";
const { hash } = require("bcryptjs");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "usuarios",
            [
                {
                    rol_id: "1",
                    nombre: "Get Sales",
                    username: "getsales",
                    password: await hash("getsales", 12),
                    email: "getsales@hey.com",
                },
                {
                    rol_id: "2",
                    nombre: "Empleado",
                    username: "empleado",
                    password: await hash("empleado", 12),
                    email: "empleado@hey.com",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("usuarios", null, {});
    },
};
