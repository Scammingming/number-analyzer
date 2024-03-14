// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(numImput) {
  if (numImput >= 1) return "pos";

  if (numImput === 0) return "zero";
  else return `neg`;
}

function evenOrOdd(numImput) {
  if (numImput % 2 == 0) return `even`;
  else return `odd`;
}

function multipleOf10(numImput) {
  if (numImput % 10 == 0) return `true`;
  else return `false`;
}

function numDigits(numImput) {
  let digits = numImput.toString();
  if (numImput < 0) return digits.length - 1;
  else return digits.length;
}

function isPrime(numImput) {
  if (numImput < 2) return false;
  if (numImput === 2) return true;
  for (let i = 2; i < numImput; i++) {
    if (numImput % i === 0) {
      return `false`;
    } else return `true`;
  }
}
