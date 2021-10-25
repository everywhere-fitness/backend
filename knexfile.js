require('dotenv').config();

const pg = require('pg')

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
  client: 'pg',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
}

// module.exports = {
//   //different configs for different dbs(dev, prod, testing, qa, staging)
//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: `${__dirname}/data/anywhere_fitness.db3`,
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: `${__dirname}/data/migrations`, // put in an enviroment variable
//     },
//     seeds: {
//       directory: `${__dirname}/data/seeds`,
//     },
//   },
// };