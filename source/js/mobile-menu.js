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
