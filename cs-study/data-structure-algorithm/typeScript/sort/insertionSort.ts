import { testArr1, testArr2 } from "../data";

function insertionSort(numArr: number[]): number[] {
  let arr = [...numArr];
  let baseArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    baseArr.splice(i, 0, arr[i]);
  }
  console.log(baseArr);
  return baseArr;
}

insertionSort(testArr1);

function insertion(baseArr: number[], insert: number): number[] {
  let arr = [...baseArr];
  for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] > insert) {
      console.log(`${arr[j]} 앞에 ${insert}`);
      arr.splice(j, 0, insert);
      break;
    }
  }

  return arr;
}

console.log(insertion([1, 3, 5], 4));
