const numberInputEl = document.getElementById("number");
const btnEl = document.getElementById("convert-btn");
const resultAreaEl = document.getElementById("output");

const convert = (arabic) => null;

const handleInput = (e) => {
  e.preventDefault();

  convert(1000);
};

btnEl.addEventListener("click", handleInput);
