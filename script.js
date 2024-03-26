function calculateSin() {
  const display = document.cal.display;
  const currentValue = parseFloat(display.value);
  display.value = Math.sin(currentValue).toFixed(4); // Calculate and display the sine value
}

function calculateCos() {
  const display = document.cal.display;
  const currentValue = parseFloat(display.value);
  display.value = Math.cos(currentValue).toFixed(4); // Calculate and display the cosine value
}

function calculateTan() {