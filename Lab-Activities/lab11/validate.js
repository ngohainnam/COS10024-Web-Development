 "use strict";


/*get variables from form and check rules*/ 
function validate() {
	// initialize local variables
	var errMsg = ""
	var result = true;	// assumes no errors
	var firstname=document.getElementById("firstname").value; 
	if (!firstname.match(/^[a-zA-Z]+$/)) {
		errMsg = errMsg + "Your first name must only contain alpha characters\n" 
		result = false;
	}
	var lastname=document.getElementById("lastname").value; 
	if (!lastname.match(/^[a-zA-Z -]+$/)) {
		errMsg = errMsg + "Your first name must only contain alpha characters\n" 
		result = false;
	}	
	
	var age=document.getElementById("age").value;
	if (isNaN(age)) { 
		errMsg = errMsg + "Your age must be a number\n" 
		result = false; 
	}
	else if (age < 18) {
		errMsg = errMsg + "Your age must be 18 or older\n"; 
		result = false; 
	}
	else if (age >= 10000) {
		errMsg = errMsg + "Your age must be under 10000 years\n"; 
		result = false; 
	}
	else{
		var tempMsg = checkSpeciesAge(age);
		if (tempMsg != "") {
			errMsg = errMsg + tempMsg; 
			result = false;
	}
	}	

	var partySize = document.getElementById("partySize").value
	if (isNaN(partySize)) { errMsg = errMsg + "Your partySize must be a number\n" 
	result = false; 
	}
	else if (partySize < 1) {
		errMsg = errMsg + "Your partySize must have at least 1 traveller\n"; 
		result = false; 
	}
	else if (partySize > 100) {
		errMsg = errMsg + "Your partySize cannot have over 100 travellers\n"; 
		result = false; 
	}
	
	if(document.getElementById("food").value == "none") {
		errMsg = errMsg + "You must select a food preference\n"; 
		result = false; 
	}
	
	var is1day = document.getElementById("1day").checked;
	var is4day = document.getElementById("4day").checked;
	var is10day = document.getElementById("10day").checked;
	/* at least one trip selected */
	if (!(is1day|| is4day || is10day)) {
		errMsg += "Please select at least one trip\n"; 
		result = false; 
	}
	var human = document.getElementById("human").checked;
	var dwarf = document.getElementById("dwarf").checked;
	var elf = document.getElementById("elf").checked;
	var hobbit = document.getElementById("hobbit").checked;
	if (!(human|| dwarf || elf || hobbit)) {
		errMsg += "Please select a specie\n"; 
		result = false; 
	}	
	if (errMsg!="") { // with errors
		alert (errMsg);
	}

	if (result)
	{
		storeBooking(firstname, lastname, age, partySize, is1day, is4day, is10day)
	}
	return result;	
}


/*return the species selected as a string*/
function getSpecies(){
	var speciesName = "Unknown" 
	var speciesArray = document.getElementById("species").getElementsByTagName("input");
	for(var i = 0; i < speciesArray.length; i++) {
	if (speciesArray[i].checked){	
		speciesName = speciesArray[i].value; 
	}
	console.log(speciesName)
	return speciesName;
	}
}
function checkSpeciesAge(age) {
	var errMsg = "";
	var species = getSpecies();
	switch(species) { 
		case "Human":
			if (age > 120) {
			errMsg = "You cannot be a Human and over 120.\n";
			}
			break;
		case "Dwarf":	
			if (age > 30 && document.getElementById("beard").value < 12) {	
				errMsg = "You cannot be a " + species + ", no " + specie +" aged 30 or over has a bread lesss than 12inches.\n";
			}	
			break;
		case "Hobbit":
			if (age > 150) {
				errMsg = "You cannot be a " + species + " and over 150.\n";
			}
			if (document.getElementById("beard").value != 0) {
				errMsg = "You cannot be a " + species + ", no " + specie +" have a bread.\n";
			}			
			break;
		case "Elf": 
			if (document.getElementById("beard").value != 0) {
				errMsg = "You cannot be a " + species + ", no " + specie +" have a bread.\n";
			}	
			break;
		default:
			errMsg = "We don't allow your kind on our tours.\n";
		}
	return errMsg;
}

function storeBooking(firstname, lastname, age, species, age, food, partySize, is1day, is4day, is10day)
{
	var trip="";
	if(is1day) trip = "1 day";
	if(is4day) trip += "4 days";
	if(is10day) trip += "10 days";
	sessionStorage.trip=trip;
	sessionStorage.firstname=firstname;

	alert ("Trip stored: " + sessionStorage.trip);
}


//this fuunction is called when the browser window loads
//it will register functions that will respond to browser events
function init() {
	document.getElementById("regform").onsubmit = validate;
	var regForm = document.getElementById("regform");// get ref to the HTML element 
	regForm.onsubmit = validate;
}
window.onload = init;
