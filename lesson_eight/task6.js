
const numbersList = [1,10,14,2,4,5,43,34];

let copyArr = [...numbersList];


copyArr.sort(function (a, b) {
    return a - b;
});

console.log(numbersList);
console.log(copyArr);
