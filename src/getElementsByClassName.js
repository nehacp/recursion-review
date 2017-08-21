// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  
  var checkChild = function (element) {
    if (element.classList) {
      if (element.classList.contains(className)) {
        result.push(element);
      }
    }
    
    for (var i = 0; i < element.childNodes.length; i++) {
      checkChild(element.childNodes[i]);  
    }   
  };
  
  checkChild(document.body);
  return result;    
};
