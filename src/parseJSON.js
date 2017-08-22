// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
// var getNestedValue = () => {
//   var result;
//   json = json.slice(1, json.length - 1);
  
//   if (json[0] === '[') {
//     parseArray(json);
//   }
//   if (json[0] === '{') {
//     parseObj(json);
//   }
// };
var parseArray = (json) => {
  var result = [];
  var element = '';
  json = json.slice(1, json.length - 1);
  
  for (var i = 0; i < json.length; i++) {
    if (json[i] === ' ' || json[i] === ',') {
      i++;
    } else if (json[i] === '[') {
      parseArray(json);
    } else if (json[i] === '{') {
      parseObj(json);
    } else if (json[i] === '"') {
      element = getValue(json, '"', i);
      i += element.length;
    } else {
      element = getValue(json, ',', i);
      i += element.length;
    }
    result.push(parseJSON(element)); 
    element = '';      
  }
  return result;
};

var getValue = (json, character, i) => {
  var result = '';
  if (character === '"') {
    result += '"';
    i++;
  }
  while (json[i] !== character) {
    result += json[i];
    i++;
  }
  if (character === '"') {
    result += '"';
    i++;
  }
  return result;
};

var getObjectValue = (json, i) => {
  var element = json[i];
  var count = 1;
  i++;
  // set a var open and close
  //check json[0] for data type
    // if array 
      // open is '[' 
      // close is ']'
    // if object 
      // open is '{' 
      // close is '}'
  while (count !== 0) {
    element;   
  }    
 
};

var parseObj = () => {
  var result = {};
  json = json.slice(1, json.length - 1);
  
  if (json[0] === '[') {
    parseArray(json);
  }
  if (json[0] === '{') {
    parseObj(json);
  }
};

var parseJSON = function(json) {
  
  if (json[0] === '[') {
    parseArray(json);
  }

  if (json[0] === '{') {
    parseObj(json);
  }

  if (!isNaN(Number(json))) {
    return Number(json);
  }

  var values = ['true', true, 'false', false, 'null', null];
  var index = values.indexOf(json);
  if ( index !== -1) {
    return values[index + 1];
  } else {  

    return json.slice(1, json.length - 1);
  }
  
};
