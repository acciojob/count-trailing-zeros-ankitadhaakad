function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Prompt user for input
const input = prompt("Enter a non-negative integer:");
const number = parseInt(input);

// Validate and display result
if (!isNaN(number) && number >= 0) {
  alert("Number of trailing zeros in " + number + "! is: " + trailingZeros(number));
} else {
  alert("Please enter a valid non-negative integer.");
}
