import Sequelize, { Model } from 'sequelize'

class Desk extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        department_id: Sequelize.INTEGER,
        status: Sequelize.INTEGER
      },
      { sequelize }
    )
    return this
  }
}

export default Desk
