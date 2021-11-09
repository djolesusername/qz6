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

const updateSlidebar = (pledgeAmount) => {
  //Split working only for up to 4-6 digit gotta work on that
  const currentAmountString = document.getElementById("currentAmount").firstChild.textContent.split("$")[1];
  let indexComma = currentAmountString.indexOf(",");
  let currentAmount = Number(currentAmountString.slice(0, indexComma) + currentAmountString.slice(indexComma + 1));
  let newAmount = currentAmount + Number(pledgeAmount);
  let newAmountString = "$" + newAmount;
  newAmountString = newAmountString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("currentAmount").firstChild.textContent = newAmountString;
  //Split working only for up to 4-6 digit gotta work on that
  console.log(document.getElementById("currentBakers"));
  const currentBakers = document.getElementById("currentBakers").innerHTML;
  let indexCommaB = currentBakers.indexOf(",");
  let currentAmountB = Number(currentBakers.slice(0, indexCommaB) + currentBakers.slice(indexCommaB + 1));
  let newAmountB = String(currentAmountB + 1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("currentBakers").firstChild.textContent = newAmountB;
};

// Get the modal
var modal = document.getElementById("myModal");
var modalS = document.getElementById("modalS");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementsByClassName("tbc")[0];
var closeModal = document.getElementsByClassName("close-modal")[0];
//var mdBtn2 = document.getElementById("modalEnd2");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
var span = document.getElementById("close");
var spanS = document.getElementById("closeS");

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
btn4.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = function () {
  modalS.style.display = "none";
};

document.querySelector("#modalEnd1").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    let pledgeAmount = event.originalTarget.previousElementSibling.firstChild.value;
    updateSlidebar(pledgeAmount);
    modal.style.display = "none";
    modalS.style.display = "block";
  },
  false
);

document.querySelector("#modalEnd2").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    let pledgeAmount = event.originalTarget.previousElementSibling.firstChild.value;
    updateSlidebar(pledgeAmount);
    modalS.style.display = "block";
    modal.style.display = "none";
  },
  false
);

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

spanS.onclick = function () {
  modalS.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }

  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Bookmark button logic
const bookmarkButton = document.getElementsByClassName("bookmarktext")[0];

let bookmarked = false;
const bookmarkDiv = document.getElementsByClassName("bookmark")[0];

bookmarkDiv.addEventListener("click", () => {
  bookmarked = !bookmarked;
  localStorage.setItem("crowdfund.bamboo", bookmarked);
  bookmarkExecute();
});

const checkBookmarked = () => {
  if (localStorage.getItem("crowdfund.bamboo") == "true") {
    bookmarked = true;
  }
  bookmarkExecute();
};

const bookmarkExecute = () => {
  if (Boolean(bookmarked)) {
    bookmarkDiv.classList.add("bookmarked");
    localStorage.setItem("crowdfund.bamboo", true);
  }
  if (!Boolean(bookmarked)) {
    bookmarkDiv.classList.remove("bookmarked");
    localStorage.setItem("crowdfund.bamboo", false);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  checkBookmarked();
});

//inactive style
