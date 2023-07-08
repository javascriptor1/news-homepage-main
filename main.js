"use strict";

const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeIcon = document.querySelector("#close-icon");
const logo = document.querySelector('img[src="assets/images/logo.svg"]');
const mobileMenu = document.querySelector("#mobile-menu");
const overlay = document.querySelector("#overlay");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.add("hidden");
  mobileMenu.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  overlay.classList.add("overlay");
});

closeIcon.addEventListener("click", () => {
  logo.classList.remove("invisible");
  hamburgerMenu.classList.remove("hidden");
  mobileMenu.classList.remove("flex");
  closeIcon.classList.add("hidden");
  mobileMenu.classList.add("hidden");
  overlay.classList.remove("overlay");
});
