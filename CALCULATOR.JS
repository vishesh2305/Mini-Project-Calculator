document.addEventListener("DOMContentLoaded", () => {
  
  // Get the Result
  const inputField = document.getElementById('result');

  // Get all the buons
  const buttons = document.querySelectorAll('.calc-buttons');
  
  // Initialize the curret input value
  let currentValue = '';
  
  // Add event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const buttonText = e.target.textContent;
  
      // Handle number buttons (0-9)
      if (!isNaN(buttonText)) {
        currentValue += buttonText;
        inputField.value = currentValue;
      }
  
      // Handle operator buttons (+, -, *, /)
      else if (['+', '-', '*', '/'].includes(buttonText)) {
        if (currentValue !== '' && currentValue[currentValue.length - 1] !== ' ') {
          currentValue += ' ' + buttonText + ' ';
          inputField.value = currentValue;
        }
      }
  
      // Handle clear button (C)
      else if (buttonText === 'C') {
        currentValue = '';
        inputField.value = '';
      }
  
      // Handle delete button (+/-)
      else if (buttonText === '+/-') {
        currentValue = currentValue * -1;
        inputField.value = currentValue;
      }
  
      // Handle percentge btton (%)
      else if (buttonText === '%') {
        currentValue = currentValue / 100;
        inputField.value = currentValue;
      }
  
      // Handle equal button (=)
      else if (buttonText === '=') {
        try {
          const result = eval(currentValue.replace(/ /g, ''));
          inputField.value = result;
          currentValue = result;
        } catch (error) {
          inputField.value = 'Error';
        }
      }
  
      // Handle decial point button (.)
      else if (buttonText === '.') {
        if (!currentValue.includes('.')) {
          currentValue += '.';
          inputField.value = currentValue;
        }
      }

    });

  });
  
});
