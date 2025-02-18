import { testArr1, testArr2 } from "../data";

function insertionSort(numArr: number[], insert: number): number[] {
  let arr = numArr;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (insert > arr[i]) {
      console.log(`insert > ${arr[i]}`);
      arr.splice(i + 1, 0, insert);
      break;
    }
  }

  console.log(arr);
  return arr;
}

insertionSort([1, 2, 3, 4, 5, 6, 7], 4);
