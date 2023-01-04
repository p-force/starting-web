// https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/javascript

function isSatorSquare(tablet) {
    for (let i = 0; i < tablet.length; i++) {
          for (let j =0; j < tablet.length; j++) {
            if (tablet[tablet.length - i - 1][tablet.length - j - 1] !== tablet[i][j])
              return (false);
            if (tablet[i][j] !== tablet[j][i]) {
              return (false);
              }
          }
        }
        return (true);
  }
   
module.exports = isSatorSquare;
