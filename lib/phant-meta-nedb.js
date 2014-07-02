/**
 * phant-meta-nedb
 * https://github.com/sparkfun/phant-meta-nedb
 *
 * Copyright (c) 2014 SparkFun Electronics
 * Licensed under the GPL v3 license.
 */

'use strict';

/**** Module dependencies ****/
var  _ = require('lodash'),
    async = require('async'),
    nedb = require('nedb'),
    util = require('util'),
    events = require('events');

/**** Make PhantMeta an event emitter ****/
util.inherits(PhantMeta, events.EventEmitter);

/**** PhantMeta prototype ****/
var app = PhantMeta.prototype;

/**** Expose PhantMeta ****/
exports = module.exports = PhantMeta;

/**** Initialize a new PhantMeta ****/
function PhantMeta(config) {

  if (! (this instanceof PhantMeta)) {
    return new PhantMeta(config);
  }

  events.EventEmitter.call(this);

  util._extend(this, config || {});

  this.init();

}

app.name = 'Metadata nedb';
app.directory = path.join(__dirname, '..');
app.db = false;

app.init = function() {

  this.db = new Datastore({ filename: path.join(this.directory, 'streams.db'), autoload: true });

};
