"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseMolad = document.querySelector(".close-modal");
const btnsOpenMolad = document.querySelectorAll(".show-modal");
const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeMolad = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenMolad.length; i++)
  btnsOpenMolad[i].addEventListener("click", openmodal);

btnCloseMolad.addEventListener("click", closeMolad);

overlay.addEventListener("click", closeMolad);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeMolad();
  }
});
