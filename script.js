const numberInputEl = document.getElementById("number");
const btnEl = document.getElementById("convert-btn");
const resultContainerEl = document.getElementById("result-container");
const resultAreaEl = document.getElementById("output");

const DIVISORS = [1000, 100, 10, 1];
const DICTIONARY = {
  1000: {
    base: "M",
    five: "",
    next: "",
  },
  100: {
    base: "C",
    five: "D",
    next: "M",
  },
  10: {
    base: "X",
    five: "L",
    next: "C",
  },
  1: {
    base: "I",
    five: "V",
    next: "X",
  },
};

const convert = (arabic) => {
  let result = "";

  for (const divisor of DIVISORS) {
    if (arabic >= divisor) {
      const times = Math.floor(arabic / divisor);
      const { base, five, next } = DICTIONARY[divisor];

      if (times === 9) result += base + next;
      else if (times >= 5) result += five + base.repeat(times - 5);
      else if (times === 4) result += base + five;
      else result += base.repeat(times);

      arabic %= divisor * times;
    }
  }

  return result;
};

const handleInput = (e) => {
  e.preventDefault();

  const arabicNumber = numberInputEl.value;

  let result;

  if (!arabicNumber) {
    result = "Please enter a valid number";
  } else if (arabicNumber < 1) {
    result = "Please enter a number greater than or equal to 1";
  } else if (arabicNumber >= 4000) {
    result = "Please enter a number less than or equal to 3999";
  } else {
    result = convert(arabicNumber);
  }

  resultAreaEl.textContent = result;
  numberInputEl.value = "";
  resultContainerEl.classList.remove("hidden");
};

btnEl.addEventListener("click", handleInput);
