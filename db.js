const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pwd",
    database: "db_data",
    host: "127.0.0.1",
    port: 5432
});

module.exports = pool;