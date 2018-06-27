const knex = require('./settings');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : knex.hostname,
      user     : knex.user,
      password : knex.password,
      database : knex.database,
      port     : knex.port,
      ssl      : knex.ssl
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
