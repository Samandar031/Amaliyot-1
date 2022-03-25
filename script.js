"use strict";

let one = document.querySelector("#img-1");
let two = document.querySelector("#img-2");
let three = document.querySelector("#img-3");
let four = document.querySelector("#img-4");
let five = document.querySelector("#img-5");

let all = document.querySelectorAll(".img");
let bosh = document.querySelector(".galery");

let box = [one, two, three, four, five];

bosh.addEventListener("click", function (e) {
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove("width");
  }

  if (e.target.classList.contains("img")) {
    e.target.classList.add("width");x
    // const sum = e.target.classList.add("img");
    // console.log(sum);
    // document.querySelector(sum).style.width = `700px`;
  }
});
