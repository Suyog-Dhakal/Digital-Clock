function displayTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let suffix = document.getElementById("suffix");

  if (hours > 12) {
    suffix.innerHTML = "PM";
  } else {
    suffix.innerHTML = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(displayTime, 100);
