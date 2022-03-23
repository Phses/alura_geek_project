"use strict";
const searchBar = document.querySelector(".search-bar");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const btnLogin = document.querySelector(".btn-login");
let widthSize = innerWidth;

function getWidthSize() {
  widthSize = innerWidth;
}

function btnHiddenMode() {
  searchBar.classList.remove("active");
  searchBar.style.width = "40px";
  btnLogin.classList.remove("hidden");
  searchInput.classList.add("hidden");
}

function btnActiveMode() {
  searchBar.classList.add("active");
  searchBar.style.width = "272px";
  btnLogin.classList.add("hidden");
  searchInput.classList.remove("hidden");
}

function initialValues() {
  getWidthSize();
  if (widthSize <= 550) {
    btnHiddenMode();
  }
}
initialValues();

addEventListener("resize", function (e) {
  getWidthSize();
  console.log(document.defaultView.getComputedStyle(searchBar).width);
  console.log(widthSize);
  if (widthSize <= 550) {
    btnHiddenMode();
  } else if (widthSize > 780) {
    searchBar.style.width = "356px";
  } else {
    searchBar.style.width = "272px";
  }
});

searchButton.addEventListener("click", function (e) {
  getWidthSize();
  console.log(searchBar.classList);
  if (widthSize <= 550 && !searchBar.classList.contains("active")) {
    btnActiveMode();
  } else if (widthSize <= 550 && searchBar.classList.contains("active")) {
    btnHiddenMode();
  }
});
