module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('desk', 'department_id', {
      type: Sequelize.INTEGER,
      references: { model: 'Department', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('desk', 'department_id')
  }
}
