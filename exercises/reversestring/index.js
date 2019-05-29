// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

console.log(reverse('apple'));

module.exports = reverse;

//1ST SOLUTION
// const arr = str.split('');
// const reversedArr = arr.reverse();
// const reversedResult = reversedArr.join('');

// console.log(reversedResult);
// return reversedResult;
