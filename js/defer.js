function jsOnload() {
var element = document.createElement("script");
element.src = "js/cut-the-mustard.js";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", jsOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", jsOnload);
else window.onload = jsOnload;
