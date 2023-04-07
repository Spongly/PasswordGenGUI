// Get references to the form elements
const lengthInput = document.getElementById('length');
const complexitySelect = document.getElementById('complexity');
const generateButton = document.getElementById('generate-password');
const passwordOutput = document.getElementById('password-output');

// Define the character sets for each complexity level
const SIMPLE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const MEDIUM_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const STRONG_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/';

// Define the function that generates passwords
function generatePassword(length, complexity) {
  let chars = '';
  switch (complexity) {
    case 'simple':
      chars = SIMPLE_CHARS;
      break;
    case 'medium':
      chars = MEDIUM_CHARS;
      break;
    case 'strong':
      chars = STRONG_CHARS;
      break;
    default:
      chars = MEDIUM_CHARS;
      break;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Add an event listener to the generate button
generateButton.addEventListener('click', () => {
  const length = lengthInput.value;
  const complexity = complexitySelect.value;
  const password = generatePassword(length, complexity);
  passwordOutput.innerText = password;
});

const textToCopy = document.querySelector('#password-output');

textToCopy.addEventListener('click', () => {
  // Create a new textarea element and set its value to the text to copy
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy.textContent;
  
  // Add the textarea element to the page and select its text
  document.body.appendChild(textarea);
  textarea.select();
  
  // Copy the selected text to the clipboard and remove the textarea element
  document.execCommand('copy');
  document.body.removeChild(textarea);
  
  // Show a confirmation message to the user
  alert('Text copied to clipboard!');
});

