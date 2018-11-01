module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "dbobjection",
      user: "postgres",
      password: "password",
      host: "localhost",
      port: 5432
    },
    pool: {
      min: 10,
      max: 100
    },
    migrations: {
      tableName: "knex_migrations"
    },
    debug: true
  }
};
