import Sequelize from 'sequelize'

import Desk from '../app/models/Desk'
import databaseConfig from '../config/database'

const models = [Desk]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map(model => model.init(this.connection))
  }
}

export default new Database()
