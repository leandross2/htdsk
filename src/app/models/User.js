import Sequelize, { Model } from 'sequelize'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        department_id: Sequelize.INTEGER
      },
      { sequelize }
    )
    return this
  }
}

export default User
