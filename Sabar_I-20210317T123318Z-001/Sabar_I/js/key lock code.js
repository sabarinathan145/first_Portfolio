window.onload = function(){
    document.addEventListener("contextmenu", function(f){
      f.preventDefault();
    }, false);
    document.addEventListener("keydown", function(f) {
    //document.onkeydown = function(e) {
      // "I" key
      if (f.ctrlKey && f.shiftKey && f.keyCode == 73) {
        disabledEvent(f);
      }
      // "J" key
      if (f.ctrlKey && f.shiftKey && f.keyCode == 74) {
        disabledEvent(f);
      }
      // "S" key + macOS
      if (f.keyCode == 83 && (navigator.platform.match("Mac") ? f.metaKey : f.ctrlKey)) {
        disabledEvent(f);
      }
      // "U" key
      if (f.ctrlKey && f.keyCode == 85) {
        disabledEvent(f);
      }
      // "F12" key
      if (event.keyCode ==123) {
        disabledEvent(f);
      }
    }, false);
    function disabledEvent(f){
      if (f.stopPropagation){
        f.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      f.preventDefault();
      return false;
    }
  };	
  