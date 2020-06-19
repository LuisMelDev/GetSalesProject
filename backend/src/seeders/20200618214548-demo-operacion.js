"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "operaciones",
            [
                {
                    operacion: "Crear",
                },
                {
                    operacion: "Actualizar",
                },
                {
                    operacion: "Eliminar",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("operaciones", null, {});
    },
};
