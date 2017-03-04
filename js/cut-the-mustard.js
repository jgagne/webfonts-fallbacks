document.addEventListener('DOMContentLoaded', function() {

if('querySelector' in document
  && 'localStorage' in window
  && 'addEventListener' in window) {
  var wf = document.querySelector('body');
  wf.classList.add('wf');
  }

}, false);
