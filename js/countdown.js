console.log("countdown.js Loaded");
//establish variables

/* Original Code:
const countdownDate = new Date('Nov 30, 2021 18:00:00').getTime();

const countdownFunction = setInterval(function(){

  console.log('funcCountdown engaged');

  const now = new Date().getTime();

  const distance = (countdownDate - now);

}, 1000);
*/

const countDownDate = new Date("Nov 30, 2021 18:00:00").getTime();

// Update the count down every 1 second
const countdownfunction = setInterval(function() {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now an the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdownTimer").innerHTML = "EXPIRED";
  }

  console.log("countDownDate", countDownDate);
  console.log('now', now);
  console.log('distance', distance);
  console.log('days', days);
  console.log('hours', hours);
  console.log('minutes', minutes);
  console.log('seconds', seconds);

}, 1000);


function readVariables() {
}
