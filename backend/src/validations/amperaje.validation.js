const yup = require("yup");

const amperajeSchema = yup.object().shape({
    amp: yup.number().integer().required(),
});

module.exports = amperajeSchema;
