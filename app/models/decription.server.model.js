'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Decription Schema
 */
var DecriptionSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },

  name: {
    type: String,
    default: '',
    required: 'Please fill name',
    trim: true
  },

  images:[ {
    type: String,
    default: '',
    trim: true
  }],
  email: {
    type: String,
    default: '',
    required: 'Please fill email',
    trim: true
  }
});

mongoose.model('Decription', DecriptionSchema);
