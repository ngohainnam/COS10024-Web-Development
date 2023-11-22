function validate() 
{
	var dob = document.getElementById("dob").value;
	var state = document.getElementById("state").value;
	var postcode = document.getElementById("postcode").value;
	var otherSkillsCheckbox = document.getElementById("otherSkill");
	var otherSkillsTextarea = document.getElementById("otherSkills").value.trim();
  
	var result = true;
	var errMsg = ""; /* stores the error message */
	var dobFormat = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
	/* regular expression for date of birth */
  
	if (dob === "") 
	{
	  errMsg += "Date of birth cannot be blank. \n";
	} 
	else 
	{
	  // Calculate age based on the provided date of birth
	  var today = new Date();
	  var birthDate = new Date(dob);
	  var age = today.getFullYear() - birthDate.getFullYear();
	
	  // Check if the age is outside the valid range (15 to 80)
	  if (age < 15 || age > 80) 
	  {
		errMsg += "You must be between 15 and 80 years old to submit the form. \n";
	  }
	}
  
	if (!dob.match(dobFormat)) 
	{
	  errMsg += "A valid date must be entered in valid dd/mm/yyyy format. \n";
	}
  
	var stateFormat = {VIC: /^[38]/, NSW: /^[12]/, QLD: /^[49]/, NT: /^0/, WA: /^6/, SA: /^5/, TAS: /^7/, ACT: /^0/};
  
	if (!stateFormat[state].test(postcode[0])) 
	{
	  errMsg +=
		"The selected state must match the first digit of the postcode.\nVIC = 3 OR 8, NSW = 1 OR 2, QLD = 4 OR 9, NT = 0, WA = 6 , SA=5 ,TAS=7, ACT= 0\n(e.g. the postcode 3122 should match the state VIC). \n";
	}
  
	if (otherSkillsCheckbox.checked && otherSkillsTextarea === "") 
	{
		errMsg += "Other Skills section cannot be blank when 'Other skills' is selected.\n";
	}
  
	// Display error message
	var errorElement = document.getElementById("error-message");
	errorElement.textContent = errMsg;
  
	/* Display error message if any error(s) is/are detected */
	if (errMsg !== "") 
	{
	  alert(errMsg);
	  result = false;
	}
	return result;
}

//Code for session storage
function Session() 
{ 
    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById('address').value;
    var suburb = document.getElementById('suburb').value;
    var state = document.getElementById('state').value;
    var postcode = document.getElementById('postcode').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
	var jobRef= document.getElementById('jobRefDisplay').value;

    // Store data in session storage
    sessionStorage.setItem('firstName', firstName);
    sessionStorage.setItem('lastName', lastName);
    sessionStorage.setItem('dob', dob);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('suburb', suburb);
    sessionStorage.setItem('state', state);
    sessionStorage.setItem('postcode', postcode);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);
	sessionStorage.setItem('jobRef', jobRef);

	// Pre-fill the form fields with the retrieved data
	document.getElementById('firstName').value = firstName;
	document.getElementById('lastName').value = lastName;
	document.getElementById('dob').value = dob;
	document.querySelector('input[name="gender"]:checked').value = gender;
    document.getElementById('address').value = address;
    document.getElementById('suburb').value = suburb;
    document.getElementById('state').value = state;
    document.getElementById('postcode').value =  postcode;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
}

//code for local storage
document.addEventListener('DOMContentLoaded', function() 
{
	const applyLinks = document.querySelectorAll('.apply-link'); // Select all elements with class 'apply-link'
	const jobRefDisplay = document.getElementById('jobRefDisplay'); // Get the element with id 'jobRefDisplay'
	const storedJobRef = localStorage.getItem('jobRef'); // Retrieve the job reference from local storage
  
	applyLinks.forEach(link => 
	{
	  link.addEventListener('click', function() 
	  {
		const jobRef = this.getAttribute('data-jobRef'); // Get the 'data-jobRef' attribute value of the clicked element
		localStorage.setItem('jobRef', jobRef); // Store the job reference in local storage
		window.location.href = 'apply.html'; // Redirect to 'apply.html' page
	  });
	});
  
	jobRefDisplay.value = storedJobRef; // Set the value of 'jobRefDisplay' element to the stored job reference
});

function submitForm() 
{
	var isValid = validate();
	if (isValid) 
	{
	  Session();
	}
	return isValid;
}

/* link HTML elements to corresponding event function */
function init() 
{
	/* link the variables to the HTML elements */
	var application = document.getElementById("application");

	/* assigns functions to corresponding events */
	application.onsubmit = submitForm;
}

/* execute the function once the window loads */
window.onload = init;