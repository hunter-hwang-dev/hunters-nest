let myArray = [170, 45, 75, 90, 802, 24, 2, 66];
let radixArray = [[], [], [], [], [], [], [], [], [], []];
let maxVal = 802;
let exp = 1;

// while (~~(maxVal / exp) > 0) {
//   myArray.forEach((element) => {
//     radixArray[~~(element / exp) % 10].push(element);
//   });

//   myArray = [];
//   radixArray.forEach((subArray) => {
//     subArray.forEach((element) => myArray.push(element));
//   });

//   console.log(myArray);
//   console.log(radixArray);
//   exp *= 10;
// }

myArray.forEach((element) => {
  radixArray[~~(element / exp) % 10].push(element);
});

myArray = [];
radixArray.forEach((subArray) => {
  subArray.forEach((element) => myArray.push(element));
});

radixArray = [[], [], [], [], [], [], [], [], [], []];

console.log(myArray);
console.log(radixArray);
