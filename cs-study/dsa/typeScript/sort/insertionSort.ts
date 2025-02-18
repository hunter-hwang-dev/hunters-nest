import { testArr1, testArr2 } from "../data";

function insertionSort(numArr: number[]) {
  let arr = numArr.slice(0, -1); //[1, 2, 3, 4, 5, 6, 7]
  let insert = numArr[numArr.length - 1]; //4

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= insert) {
      console.log(`${arr[i]} >= insert`);
    } else if (arr[i] < insert) {
      console.log(`${i} 인덱스에서 ${arr[i]} < insert`);
      arr.splice(i + 1, 0, insert);
      console.log(arr, insert);
      break;
    }
  }
}

insertionSort([1, 2, 3, 4, 5, 6, 7, 4]);
