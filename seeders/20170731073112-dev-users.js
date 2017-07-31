'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users', [{
      username: 'luke.purton@gmail.com',
      passwordHash: 'testhash',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      username: 'luke.purton@gmail.com'
    }]);
  }
};