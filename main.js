function Users(name, surname) {
  this.name = name;
  this.surname = surname;
  this.info = function () {
    document.write(name + " " + surname);
  };
}
var tijana = new Users("Tijana", "Savic");
tijana.info();

var current = document.getElementById("current");
var pictures = document.getElementsByClassName("thumb");
for (var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("click", display);
}
function display() {
  var sl = this.getAttribute("src");
  current.setAttribute("src", sl);
}
