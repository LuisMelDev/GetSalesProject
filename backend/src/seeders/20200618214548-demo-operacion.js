"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "operaciones",
            [
                {
                    operacion: "CREATE",
                },
                {
                    operacion: "UPDATE",
                },
                {
                    operacion: "DELETE",
                },
                {
                    operacion: "LOGIN",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("operaciones", null, {});
    },
};
