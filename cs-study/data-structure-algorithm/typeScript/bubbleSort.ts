import { testArr } from "./data";

function bubbleSort(numArr: number[]): number[] {
  var arr = [...numArr];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  return arr;
}

console.log(bubbleSort(testArr));

/*
====bubbleSort==============================================
큰 루프: 0부터 n-1 > 0부터 n-2 ... > 0부터 1 임에 주의!
작은 루프: 한 쌍씩 대조해 가며 큰 수를 뒤로 "거품처럼" 올리기.
1. 뒤에 수가 더 큼: 냅둬, 2. 앞의 수가 더 큼: 바꿔.
=============================================================
*/
