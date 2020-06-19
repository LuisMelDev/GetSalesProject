"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "usuarios",
            [
                {
                    rol_id: "1",
                    nombre: "Get Sales",
                    username: "getsales",
                    password: "getsales",
                    email: "getsales@hey.com",
                },
                {
                    rol_id: "2",
                    nombre: "Empleado",
                    username: "empleado",
                    password: "empleado",
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
