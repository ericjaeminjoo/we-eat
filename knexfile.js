const settings = require('./settings');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: settings.hostname,
      user: settings.user,
      password: settings.password,
      database: settings.database,
      port: settings.port,
      ssl: settings.ssl
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
