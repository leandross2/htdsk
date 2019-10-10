import Sequelize from 'sequelize'

import Desk from '../app/models/Desk'
import databaseConfig from '../config/database'
import User from '../app/models/User'
import Department from '../app/models/Department'

const models = [Desk, User, Department]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
