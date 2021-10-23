const configs = require("../knexfile");
const knex = require("knex");

const enviroment = process.env.NODE_ENV || "development";

module.exports = knex(configs[enviroment]);