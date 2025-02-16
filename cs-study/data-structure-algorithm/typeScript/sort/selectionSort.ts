import { testArr } from "../data";

function selectionSort(numArr: number[]): number[] {
  let arr = [...numArr];
  let 현재최소: { index: number; value: number };

  for (let i = 0; i < arr.length - 1; i++) {
    현재최소 = { index: i, value: arr[i] };
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < 현재최소.value) {
        현재최소.index = j;
        현재최소.value = arr[j];
      }
    }
    arr[현재최소.index] = arr[i];
    arr[i] = 현재최소.value;
    console.log(arr);
  }

  return arr;
}

selectionSort(testArr);
