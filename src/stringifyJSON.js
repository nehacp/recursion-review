// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var input = typeof obj;

  if (input === 'string') {
    return `"${obj}"`;
  }
  
  if (input === 'boolean' || obj === null) {
    return `${obj}`;
  }

  if (input === 'number') {
    if (isNaN(obj)) {
      return 'null';
    } else {
      return `${obj}`;
    }
  }
  
  if (Array.isArray(obj)) {
    return `[${obj.map(stringifyJSON).join()}]`;  
  }
  
  if (input === 'object') {
    var result = '';
    for (var k in obj) {
      var key = stringifyJSON(k);
      var value = stringifyJSON(obj[k]);
      if (value) {
        result += `${key}:${value},`;
      }
    }
    if (result) { 
      result = result.substring(0, result.length - 1);
    }
    return '{' + result + '}';
  }
};
