import { testArr1, testArr2 } from "../data";

function selectionSort(numArr: number[]): number[] {
  let arr = [...numArr];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //구조 분해 할당 (Destructuring)으로 쉽게 스왑 가능!
    console.log(arr);
  }

  return arr;
}

selectionSort(testArr1);
selectionSort(testArr2);
