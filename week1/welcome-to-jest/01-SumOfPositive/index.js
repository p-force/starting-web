// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0;
    for (let i of arr) {
      if (i > 0)
        sum += i;
    }
    return (sum);
  }

module.exports = positiveSum;
