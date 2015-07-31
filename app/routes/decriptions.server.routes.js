'use strict';

module.exports = function (app) {
  var users = require('../../app/controllers/users.server.controller');
  var decriptions = require('../../app/controllers/decriptions.server.controller');


  app.route('/decriptions')
    .get(decriptions.read)
    .post(decriptions.add);
};
