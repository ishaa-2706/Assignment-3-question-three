function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  function filterOdd() {
    const numbersInput = document.getElementById('numbers');
    const resultElement = document.getElementById('result');
  
    const numbersString = numbersInput.value;
    const numbersArray = numbersString.split(',');
  
    const numericArray = numbersArray.map(Number);
    const oddNumbers = filterOddNumbers(numericArray);
  
    if (oddNumbers.length > 0) {
      resultElement.textContent = `Odd Numbers: ${oddNumbers.join(', ')}`;
    } else {
      resultElement.textContent = 'No odd numbers found';
    }
  }
  
  document.getElementById('filter').addEventListener('click', filterOdd);
  