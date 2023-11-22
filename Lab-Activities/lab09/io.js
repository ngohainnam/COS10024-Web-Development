/**
* Author: Hai Nam Ngo 103488515
* Target: .html 
* Purpose: This file is for
* Created: 5/5/2023
* Last updated: 5/5/2023
* Credits: Lab task 09 instruction
*/

"use strict";

function promptName(){
  var sName=prompt("Enter your name. \nThis prompt show up when the \n Click Me button is clicked.","Your name");
  alert("Hi there " + sName+". Alert boxes are a quick way to check the state \n of your variables when you are developing code.");
  rewriteParagraph(sName);
}

function rewriteParagraph(userName){
  var message = document.getElementById("message");
  message.innerHTML = "Hi " + userName + ". If you can see this you have successfully overwritten the contents of this paragraph. Congratulations!!";		
}

function writeNewMessage(){
  var click2 = document.getElementById("task1");
  click2.textContent = "You have now finished Task 1";
}

function init(){
  var clickMe = document.getElementById("clickme");
  clickMe.onclick = promptName;

  var click2 = document.getElementsByTagName("h1");
  click2[0].onclick = writeNewMessage;
}

window.onload=init;
