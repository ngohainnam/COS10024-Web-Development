function showTip() {
  var sidTip; /* A variable named sidTip is defined */
  sidTip = document.getElementById("sidTip"); /* Get access to the element with id "sidTip" */
  sidTip.style.display = "inline"; /* The CSS property "display" of element "sidTip" is set to "inline" */
}

function hideTip() {
  var sidTip; /* create a variable named sidTip */
  sidTip = document.getElementById("sidTip"); /* get access to the element by its id "sidTip" */
  sidTip.style.display = "none"; /* hide element "sidTip" by setting the CSS property "display" to "none" */
}

function init() {
  var sid; /* create a variable named sid */
  sid = document.getElementById("sid"); /* get access to the HTML element by its id "sid" and link it to sid */
  sid.onmouseover = showTip; /* link function showTip to the on mouseover event of sid */
  sid.onmouseout = hideTip; /* link function hideTip to the onmouseout event of sid */
}

window.onload = init; /* link function init to the onload event of the window so that function init will be called when the page is loaded */
