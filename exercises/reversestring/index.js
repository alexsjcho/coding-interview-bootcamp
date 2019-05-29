// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = str.split('');
  const reversedArr = arr.reverse();
  const reversedResult = reversedArr.join('');

  console.log(reversedResult);
  return reversedResult;
}

console.log(reverse('apple'));

module.exports = reverse;
