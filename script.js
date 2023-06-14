window.onload = function() {
    var generateBtn = document.getElementById('generateBtn');
    var numberContainer = document.getElementById('numberContainer');
  
    generateBtn.addEventListener('click', function() {
      var numDigits = Math.floor(Math.random() * 3) + 2; // Genera un número aleatorio entre 2 y 4
      var randomNumber = generateRandomNumber(numDigits);
      numberContainer.textContent = randomNumber;
    });
  
    function generateRandomNumber(numDigits) {
      var min = Math.pow(10, numDigits - 1);
      var max = Math.pow(10, numDigits) - 1;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };
  