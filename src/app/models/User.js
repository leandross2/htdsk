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

  static associate(models) {
    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department'
    })
  }
}

export default User
