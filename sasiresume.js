const editButton = document.getElementById("editButton");

const popupcontainer = document.getElementById("popup-container");
const firstIn = document.getElementById("fname");
const lastIn = document.getElementById("lname");
const ProfessionIn = document.getElementById("profession");

editButton.addEventListener("click", () => {
  popupcontainer.style.visibility = "visible";
  firstIn.value = document.querySelector(".style1").textContent;
  lastIn.value = document.querySelector(".style2").textContent;
  ProfessionIn.value = document.querySelector(".pro").textContent;
});

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", () => {
  document.querySelector(".style1").textContent = firstIn.value;
  document.querySelector(".style2").textContent = lastIn.value;
  document.querySelector(".pro").textContent = ProfessionIn.value;
  popupcontainer.style.display = "hidden";
});
