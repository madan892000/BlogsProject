const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"bikesdata",
    password:"123456",
    port:3002
})

// pool.on('error', (err) => {
//     console.error('An error occurred in the PostgreSQL connection pool:', err);
//   });

module.exports = pool;