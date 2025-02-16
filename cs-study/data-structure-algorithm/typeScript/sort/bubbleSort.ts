import { testArr1, testArr2 } from "../data";

function bubbleSort(numArr: number[]): number[] {
  let arr = [...numArr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //구조 분해 할당
      }
    }
  }

  return arr;
}

console.log(bubbleSort(testArr1));
console.log(bubbleSort(testArr2));

/*
====bubbleSort==============================================
큰 루프: 0부터 n-1 > 0부터 n-2 ... > 0부터 1 임에 주의!
작은 루프: 한 쌍씩 대조해 가며 큰 수를 뒤로 "거품처럼" 올리기.
1. 뒤에 수가 더 큼: 냅둬, 2. 앞의 수가 더 큼: 바꿔.
=============================================================
*/
