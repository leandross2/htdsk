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

  static associate(models) {
    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department'
    })
  }
}

export default Desk
