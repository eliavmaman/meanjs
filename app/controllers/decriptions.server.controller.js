'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Decription = mongoose.model('Decription'),
  _ = require('lodash');
var q = require('q');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var nodemailer = require('nodemailer');
var config = require('../../config/config');
var User = mongoose.model('User');


/**
 * Show the current Usermessage
 */
exports.read = function (req, res) {
  console.log('--------------------' + req.query.email);
  Decription.find({email: req.query.email}).exec(function (err, decriptions) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(decriptions);
    }
  });
};


exports.add = function (req, res) {
  console.log('-------------------------');
  var decription = new Decription(req.body);

  decription.save(function (err, savedDecription) {

    if (err) {
      res.status(400).send(err);
    } else {
      console.log('Decription saved');

      res.jsonp(savedDecription);
    }
  });
};
