module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'department_id', {
      type: Sequelize.INTEGER,
      references: { model: 'Department', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'department_id')
  }
}
