document.addEventListener("keypress", check);
function check() {
  var x = event.keyCode;
  if (x == 13) {
    return guess();
  }
  else {
    return false;
  }
}
function guess() {
  var guess = document.getElementById("guess").value;
  if (guess !== "camera") {
    document.getElementById("out").innerHTML = "That's not correct!";
    document.getElementById("guess").value = "";
  }
  else {
    document.getElementById("out").innerHTML = "That's Correct!";
    document.getElementById("guess").value = "camera";
    document.getElementById("next").style.display = "block";
  }
}
