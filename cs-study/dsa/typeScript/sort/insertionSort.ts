import { testArr1, testArr2 } from "../data";

function insertionSort(numArr: number[]) {
  if (numArr.length == 0) {
    return [];
  } else if (numArr.length == 1) {
    return [numArr[0]];
  } else {
    let [slice, insert] = [
      insertionSort(numArr.slice(0, -1)),
      ...numArr.slice(-1),
    ];

    let inserted = false;
    for (let i = slice.length - 1; i >= 0; i--) {
      if (slice[i] > insert) {
      } else {
        slice.splice(i + 1, 0, insert);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      slice.unshift(insert); //slice.splice(0, 0, insert);
    }

    return slice;
  }
}

console.log(insertionSort([]));
console.log(insertionSort([3]));
console.log(insertionSort([3, 5]));
console.log(insertionSort([3, 5, 6]));
console.log(insertionSort([3, 5, 6, 4]));
console.log(insertionSort(testArr1));
console.log(insertionSort(testArr2));
