require('dotenv').config();
const { Pool } = require('pg');

const config = {
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    port: process.env.db_port,
    host: process.env.db_host,
};

const pool = new Pool(config);

module.exports = pool;