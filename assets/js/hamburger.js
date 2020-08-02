const menuBtn = document.querySelector(".nav-toggle-lable");
const modelBtnOne = document.querySelector(".toggle-lable-one");
const modelBtnTwo = document.querySelector(".toggle-lable-two");
const modelBtnThree = document.querySelector(".toggle-lable-three");
const modelBtnFour = document.querySelector(".toggle-lable-four");
const modelBtnFive = document.querySelector(".toggle-lable-five");
const modelBtnSix = document.querySelector(".toggle-lable-six");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

let modelOpenOne = false;
modelBtnOne.addEventListener("click", () => {
  if (!modelOpenOne) {
    modelBtnOne.classList.add("model-open");
    modelOpenOne = true;
  } else {
    modelBtnOne.classList.remove("model-open");
    modelOpenOne = false;
  }
});

let modelOpenTwo = false;
modelBtnTwo.addEventListener("click", () => {
  if (!modelOpenTwo) {
    modelBtnTwo.classList.add("model-open");
    modelOpenTwo = true;
  } else {
    modelBtnTwo.classList.remove("model-open");
    modelOpenTwo = false;
  }
});

let modelOpenThree = false;
modelBtnThree.addEventListener("click", () => {
  if (!modelOpenThree) {
    modelBtnThree.classList.add("model-open");
    modelOpenThree = true;
  } else {
    modelBtnThree.classList.remove("model-open");
    modelOpenThree = false;
  }
});

let modelOpenFour = false;
modelBtnFour.addEventListener("click", () => {
  if (!modelOpenFour) {
    modelBtnFour.classList.add("model-open");
    modelOpenFour = true;
  } else {
    modelBtnFour.classList.remove("model-open");
    modelOpenFour = false;
  }
});

let modelOpenFive = false;
modelBtnFive.addEventListener("click", () => {
  if (!modelOpenFive) {
    modelBtnFive.classList.add("model-open");
    modelOpenFive = true;
  } else {
    modelBtnFive.classList.remove("model-open");
    modelOpenFive = false;
  }
});

let modelOpenSix = false;
modelBtnSix.addEventListener("click", () => {
  if (!modelOpenSix) {
    modelBtnSix.classList.add("model-open");
    modelOpenSix = true;
  } else {
    modelBtnSix.classList.remove("model-open");
    modelOpenSix = false;
  }
});
