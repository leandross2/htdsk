module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('desks', 'department_id', {
      type: Sequelize.INTEGER,
      references: { model: 'departments', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('desks', 'department_id')
  }
}
