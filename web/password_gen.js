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
