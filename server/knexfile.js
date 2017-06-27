module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'dicey2_dev',
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'dicey2_test',
    }
  },
  "production": {
    "client": "pg",
    "connection": process.env.DATABASE_URL
  }
};
