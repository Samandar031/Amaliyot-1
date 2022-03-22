"use stric";

let one = document.querySelector(".img-1");
let two = document.querySelector(".img-2");
let three = document.querySelector(".img-3");
let four = document.querySelector(".img-4");
let five = document.querySelector(".img-5");

one.addEventListener("click", function () {
  one.style.width = "700px";
  two.style.width = "150px";
  three.style.width = "150px";
  four.style.width = "150px";
  five.style.width = "150px";
});

two.addEventListener("click", function () {
  one.style.width = "150px";
  two.style.width = "700px";
  three.style.width = "150px";
  four.style.width = "150px";
  five.style.width = "150px";
});

three.addEventListener("click", function () {
  one.style.width = "150px";
  two.style.width = "150px";
  three.style.width = "700px";
  four.style.width = "150px";
  five.style.width = "150px";
});

four.addEventListener("click", function () {
  one.style.width = "150px";
  two.style.width = "150px";
  three.style.width = "150px";
  four.style.width = "700px";
  five.style.width = "150px";
});

five.addEventListener("click", function () {
  one.style.width = "150px";
  two.style.width = "150px";
  three.style.width = "150px";
  four.style.width = "150px";
  five.style.width = "700px";
});
