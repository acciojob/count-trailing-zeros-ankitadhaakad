function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function calculateTrailingZeros() {
  const input = prompt("Enter a non-negative integer:");
  const number = parseInt(input);

  if (isNaN(number) || number < 0) {
    alert("Please enter a valid non-negative integer.");
    return;
  }

  const result = trailingZeros(number);
  alert(`Number of trailing zeros in ${number}! is: ${result}`);
}
