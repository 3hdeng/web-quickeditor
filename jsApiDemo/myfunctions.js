"use strict";
//===In modern browsers you can do

//if(Array.isArray) Array.isArray(obj)

//safe way
if (typeof Array.isArray === 'undefined') {
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
};

function objToString(obj) {
  //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof
  switch (typeof obj) {
    case "string":
      return '"' + obj + '"';
      break;
    case "function":
      return 'function'; // obj.name || obj.toString();
      break;
    case "object":
      if (Array.isArray(obj)) return 'Array';
      else {
        /*var s = '';
        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            s += p + ':' + objToString(obj[p]) + '\n';
          }
        }
        return s;
        */
        return 'object';
      }
      break;
    default:
      return obj.toString();
  }

}

const LIb = '<li>';
const LIe = '</li>';
const ULb = '<ul>';
const ULe = '</ul>';

function toHtmlLi(obj, kori) {
  kori = kori || '';
  var myLIb = LIb + kori;
  switch (typeof obj) {
    /*case "string":
      return myLIb + obj + LIe;
      break; --> default*/
    case "function":
      return myLIb + ' _function : ' + obj.name || obj.toString() + LIe;
      break;
    case "object":
      if (Array.isArray(obj)) {
        var s = myLIb + ' _array :' + ULb;
        for (var i = 0; i < obj.length; i++) {
          s += toHtmlLi(obj[i], i);
        }
        s += ULe + LIe;
      }
      else {
        var s = myLIb + ' _object :' + ULb;
        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            s += toHtmlLi(obj[p], p);
          }
        }
        s += ULe + LIe;
        return s;
      }
      break;
    default:
      return myLIb + obj + LIe;
  }
}

function toHtmlUL(obj){
   return ULb+ toHtmlLi(obj) + ULe;
}