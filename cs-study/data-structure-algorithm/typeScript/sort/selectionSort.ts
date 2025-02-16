import { testArr } from "../data";

function selectionSort(numArr: number[]): number[] {
  let arr = [...numArr];

  for (let i = 0; i < arr.length - 1; i++) {
    let 최소값인덱스 = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[최소값인덱스]) {
        최소값인덱스 = j;
      }
    }
    [arr[i], arr[최소값인덱스]] = [arr[최소값인덱스], arr[i]]; //구조 분해 할당 (Destructuring)으로 쉽게 스왑 가능!
    console.log(arr);
  }

  return arr;
}

selectionSort(testArr);
