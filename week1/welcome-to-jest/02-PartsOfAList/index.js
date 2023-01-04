// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
    let mass = [];

    let num = -1;
    for (let i of arr)
        num++;
    for (let i = 0; i < num; i++) {
        mass[i] = [];
    }
    
    for (let i = 0; i < num; i++) {
        mass[i][0] = "";
        for (let j = 0; j <= i; j++) {
            mass[i][0] += arr[j]
            if (j < i)
                mass[i][0] += " ";
        }
        mass[i][1] = "";
        for (let j = i + 1; j <= num; j++) {
            mass[i][1] += arr[j]
            if (j < num)
                mass[i][1] += " ";
        }
    }
    return (mass);
}

module.exports = partlist;
