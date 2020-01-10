/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

$( document ).ready(function() {
    console.log('abc');
});

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 0.5);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
    }
  }
}