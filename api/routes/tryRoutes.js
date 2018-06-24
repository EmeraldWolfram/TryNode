'use strict';
module.exports = function(app) {
  var emeraldList = require('../controllers/tryController');

  // emeraldList Routes
  app.route('/user')
    .get(emeraldList.getUserList)
    .post(emeraldList.createUser);


  app.route('/user/:userId')
    .get(emeraldList.getUser)
    .put(emeraldList.updateUser)
    .delete(emeraldList.deleteUser);
};
