// Модальное окно

var openModalBtn = document.querySelectorAll(".modal-add-cart");
var modal = document.querySelector(".modal-order");
var overlay = document.querySelector(".overlay");
var inputRadio = modal.querySelector("[name=size]");
var closeBtn = modal.querySelector(".modal-order__close-button");


for (var i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-order--show");
    overlay.classList.add("overlay--show");
    inputRadio.focus();
  });
}

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (overlay.classList.contains("overlay--show")) {
    overlay.classList.remove("overlay--show");
    modal.classList.remove("modal-order--show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-order--show")) {
      modal.classList.remove("modal-order--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

closeBtn.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    if(modal.classList.contains("modal-order--show")) {
      modal.classList.remove("modal-order--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

//Мобильное меню
var mainNav = document.querySelector(".main-nav");
var toggleNav = mainNav.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--no-js");

toggleNav.addEventListener ("click", function (evt) {
  evt.preventDefault();
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.add("main-nav--opened");
    mainNav.classList.remove("main-nav--closed");
  }
  else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});
