import { testArr } from "../data";

function selectionSort(numArr: number[]): number[] {
  let arr = [...numArr];
  let 현재최소 = { index: 0, value: arr[0] };

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < 현재최소.value) {
      현재최소.index = j;
      현재최소.value = arr[j];
    }
    
  return arr;
}

console.log(selectionSort(testArr));
