import { testArr1, testArr2 } from "../data";

function insertionSort(numArr: number[]): number[] {
  let arr = [...numArr];

  return arr;
}

// console.log(insertionSort(testArr1));
// console.log(insertionSort(testArr2));

function insertion(baseArr: number[], insert: number): number[] {
  let arr = [...baseArr];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > insert) {
      console.log(`${arr[i]} 앞에 ${insert}`);
      arr.splice(i, 0, insert);
    }
  }

  return arr;
}

console.log(insertion([1, 3, 5], 4));
