const configDatabase = {
  remoto: {
    dialect: 'postgres',
    host: 'salt.db.elephantsql.com',
    username: 'vqdjgopo',
    password: 'WK0GRi7mVLRqYHPzQ19a7D5YFzYJq-g2',
    database: 'vqdjgopo',
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  },
  local: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'htdsk',
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  }
}

module.exports = configDatabase.local
