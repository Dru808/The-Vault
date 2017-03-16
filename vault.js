'use strict';
module.exports = function() {

  var vault = {};

  function setValue(key, value){
    vault[key] = value;
  }

  function getValue(key){
    if(vault[key] === undefined){
      return vault[key] = null;
    } else {
      return vault[key];
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  };
};