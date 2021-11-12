//radiobuttons
var buttons = document.getElementsByClassName("input-number");
var remainingStands = document.getElementsByClassName("pledge-remaining-number");

function handleClick(radio) {
  //clearing any open
  Array.from(buttons).forEach(function (currentValue, currentIndex, listObj) {
    currentValue.parentElement.parentElement.lastElementChild.classList.remove("optional-visible");
    currentValue.parentElement.parentElement.classList.remove("modal-selected");
  });

  //opening selected
  radio.parentElement.parentElement.lastElementChild.classList.add("optional-visible");
  radio.parentElement.parentElement.classList.add("modal-selected");
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
  const currentBakers = document.getElementById("currentBakers").innerHTML;
  let indexCommaB = currentBakers.indexOf(",");
  let currentAmountB = Number(currentBakers.slice(0, indexCommaB) + currentBakers.slice(indexCommaB + 1));
  let newAmountB = String(currentAmountB + 1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("currentBakers").firstChild.textContent = newAmountB;
};

// Get the modal
var modal = document.getElementById("myModal");
var modalS = document.getElementById("modalS");
var modalH = document.getElementById("modalM");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementsByClassName("tbc")[0];
var btnH = document.getElementsByClassName("hamburger-holder")[0];
var logo = document.getElementsByClassName("logo")[0];
var closeModal = document.getElementsByClassName("close-modal")[0];
//var mdBtn2 = document.getElementById("modalEnd2");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
var span = document.getElementById("close");
var spanS = document.getElementById("closeS");
var spanH = document.getElementById("closeH");

const selectRadio = (targetRadio) => {
  const selectMe = document.querySelector(`#${targetRadio}`);
  handleClick(selectMe);
  selectMe.checked = true;
};
// When the user clicks on the button, open the modal
btn.onclick = function (e) {
  modal.style.display = "block";
  const targetRadio = e.originalTarget.dataset.type;
  selectRadio(targetRadio);
};
btn2.onclick = function (e) {
  modal.style.display = "block";
  const targetRadio = e.originalTarget.dataset.type;
  selectRadio(targetRadio);
};
btn3.onclick = function (e) {
  modal.style.display = "block";
  const targetRadio = e.originalTarget.dataset.type;
  selectRadio(targetRadio);
};
btn4.onclick = function (e) {
  modal.style.display = "block";
  const targetRadio = e.originalTarget.dataset.type;
  selectRadio(targetRadio);
};
btnH.onclick = function () {
  modalM.style.display = "block";
  btnH.style.visibility = "hidden";
  logo.style.visibility = "hidden";
};
closeModal.onclick = function () {
  modalS.style.display = "none";
};

document.querySelector("#modalEnd0").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    let pledgeAmount = 0;
    updateSlidebar((pledgeAmount = 0));
    modal.style.display = "none";
    modalS.style.display = "block";
  },
  false
);

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
document.querySelector("#modalEnd3").addEventListener(
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

/*document.querySelectorAll(".modalEnd").addEventListener(
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
*/
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

spanS.onclick = function () {
  modalS.style.display = "none";
};

spanH.onclick = function () {
  modalH.style.display = "none";
  btnH.style.visibility = "visible";
  logo.style.visibility = "visible";
};
// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }

  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == modalH) {
    modalH.style.display = "none";
    btnH.style.visibility = "visible";
    logo.style.visibility = "visible";
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
const checkOOS = () => {
  // class pledge-remaining-number
  Array.from(remainingStands).forEach(function (currentValue, currentIndex, listObj) {
    if (Number(currentValue.innerHTML) < 1) {
      console.log(currentValue.parentElement.parentElement);
      currentValue.parentElement.parentElement.classList.add("outOfStock");
      let oosButton = currentValue.parentElement.parentElement.querySelector("button");
      let oosInput = currentValue.parentElement.parentElement.querySelector("input");

      if (oosInput) {
        oosInput.disabled = "true";
      }
      oosButton.innerHTML = "Out of Stock";
      oosButton.classList.add("outOfStockGrey");
      oosButton.disabled = true;
      oosButton.onclick = function () {
        return false;
      };
    }
    //  currentValue.parentElement.parentElement.lastElementChild.classList.remove("optional-visible");
    //  currentValue.parentElement.parentElement.classList.remove("modal-selected");
  });
};
window.addEventListener("DOMContentLoaded", () => {
  checkBookmarked();
  checkOOS();
});

//inactive style
