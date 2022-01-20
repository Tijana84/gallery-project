function stoplight() {
  var color = document.getElementsByClassName("color");
  color[0].style.background = "red";
  color[1].style.background = "gray";
  color[2].style.background = "gray";

  function changeToYellow() {
    color[1].style.background = "yellow";
  }
  function changeToGreen() {
    color[0].style.background = "grey";
    color[1].style.background = "gray";
    color[2].style.background = "green";
  }

  var x = setTimeout(changeToYellow, 3000);
  var y = setTimeout(changeToGreen, 5000);
  var start = setInterval(stoplight, 8000);
}
stoplight();
