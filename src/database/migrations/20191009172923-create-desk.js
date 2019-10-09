module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('desks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      department_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('desks')
  }
}
