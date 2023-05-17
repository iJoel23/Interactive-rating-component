"use strict";

const rate = document.querySelectorAll(".js-btn");
const submitBtn = document.querySelector(".js-btn--submit");
const againBtn = document.querySelector(".js-btn--again");
const results = document.querySelector(".js-result");
const cardRate = document.querySelector(".card__container-1");
const cardThanks = document.querySelector(".card__container-2");
let currentRate;

const btn = function () {
  cardThanks.classList.toggle("hidden");
  cardRate.classList.toggle("hidden");
  results.textContent = `You selected ${currentRate} out of 5!`;
};

rate.forEach(function (rate) {
  rate.addEventListener("click", function () {
    currentRate = rate.innerHTML;
  });
});
submitBtn.addEventListener("click", btn);
againBtn.addEventListener("click", btn);
