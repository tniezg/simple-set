'use strict';

function SimpleSet(){
  this._set = new Set();
}

SimpleSet.prototype.add = function(key){
  this._set.add(key);
};

SimpleSet.prototype.remove = function(key){
  this._set.delete(key);
};

SimpleSet.prototype.has = function(key){
  return this._set.has(key);
};

SimpleSet.prototype.keys = function(){
  var values = this._set.values();
  var value = values.next();
  var fullArray = [];

  while(!value.done){
    fullArray.push(value.value);

    value = values.next();
  }

  if(typeof value.value !== 'undefined'){
    fullArray.push(value.value);
  }

  return fullArray;
};

module.exports = SimpleSet;