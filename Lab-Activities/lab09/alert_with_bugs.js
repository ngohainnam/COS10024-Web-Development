var yourName;   //global variable accessible to all functions

function showAnotherMessage() {
	alert("Hi "  yourName + ".\nThis is an alert message is no longer defined\nin the HTML but in a JavaScript file");
}

function init() {
	yourName = Prompt('Hi. Enter your name.\nWhen the browser window is first loaded\nthe function containing this prompt window is called.", "Your name");
	clickme = document.getElementById("clickme");
	clickme.onclick = showAnotherMessage;
	
	}

window.onload = init();