// JavaScript Document

var myIndex = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideshow, 3000); 
}


/*slideshow2*/
var Indexhome = 0;
hmgellary();

function hmgellary() {
  var i;
  var x = document.getElementsByClassName("swipehome");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  Indexhome++;
  if (Indexhome > x.length) {Indexhome = 1}    
  x[Indexhome-1].style.display = "block";  
  setTimeout(hmgellary, 3000); 