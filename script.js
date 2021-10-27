//radiobuttons
var buttons = document.getElementsByClassName("input-number");

function handleClick(radio) {
  //clearing any open
  Array.from(buttons).forEach(function (currentValue, currentIndex, listObj) {
    currentValue.parentElement.parentElement.lastElementChild.classList.remove("optional-visible");
  });

  //opening selected
  radio.parentElement.parentElement.lastElementChild.classList.add("optional-visible");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
var span = document.getElementById("close");
console.log(span);

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
btn2.onclick = function () {
  modal.style.display = "block";
};
btn3.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  console.log("clicked");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
