'use strict';

function SimpleSet(){
  this._set = {};
}

SimpleSet.prototype.add = function(key){
  this._set[key] = true;
};

SimpleSet.prototype.remove = function(key){
  delete this._set[key];
};

SimpleSet.prototype.has = function(key){
  return key in this._set;
};

SimpleSet.prototype.keys = function(){
  return Object.keys(this._set);
};

SimpleSet.prototype.bulkAdd = function(keys){
  keys.forEach(function(key){
    this.add(key);
  }, this);
};

module.exports = SimpleSet;