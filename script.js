const countdownElement = document.getElementById('countdown');
const fullscreenButton = document.getElementById('fullscreenButton');

// Target date: October 25, 2023
const targetDate = new Date('2023-10-20').getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

fullscreenButton.addEventListener('click', function() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    const body = document.querySelector('body');
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { // Firefox
      body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { // Chrome, Safari, Opera
      body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { // IE/Edge
      body.msRequestFullscreen();
    }
  }
});
