// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function countLanguages(list) {
    const obj = {};
    for (let i of list) 
        obj[i.language] = !Object.prototype.hasOwnProperty.call(obj, i.language) ? 1 : (obj[i.language] + 1);
    return (obj);
  }

module.exports = countLanguages
