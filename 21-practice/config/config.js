require("dotenv").config();

const development = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
};

module.exports = {development};

const test = {};
const production  = {};
