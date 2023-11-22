// Set the countdown time to 2 minutes (in milliseconds)
var countDownTime = 2 * 60 * 1000;

// Update the count down every 1 second
var x = setInterval(function() 
{
  countDownTime -= 1000; // Decrease the countdown time by 1 second

  // Calculate minutes and seconds
  var minutes = Math.floor(countDownTime / (60 * 1000));
  var seconds = Math.floor((countDownTime % (60 * 1000)) / 1000);

  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s";

  // If the count down is over, write some text
  if (countDownTime <= 0) 
  {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "It's time to submit the form.";
  }
}, 1000);


// Get the button
document.addEventListener("DOMContentLoaded", function() {
    let myButton = document.getElementById("myBtn");
  
    window.onscroll = function() { scrollFunction() };
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    }
  
    myButton.addEventListener("click", function() {
      topFunction();
    });
  
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });
  

