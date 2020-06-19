"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "clientes",
            [
                {
                    cedula: "20.100.055",
                    nombre: "Karpesky",
                    direccion: "Brooklyn 1020 Av",
                    fecha_nacimiento: new Date(),
                    telefono: "04264558990",
                    email: "karp@hey.com",
                },
                {
                    cedula: "15.677.254",
                    nombre: "Cisco",
                    direccion: "Dallas 345 Av",
                    fecha_nacimiento: new Date(),
                    telefono: "04261009090",
                    email: "dallas@hey.com",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("clientes", null, {});
    },
};
