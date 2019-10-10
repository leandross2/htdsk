module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('desks', 'status', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('desks', 'status')
  }
}
