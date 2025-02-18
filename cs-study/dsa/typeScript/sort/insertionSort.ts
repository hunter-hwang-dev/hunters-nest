import { testArr1, testArr2 } from "../data";

function insertion(numArr: number[], insert: number): number[] {
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

//insertion([1, 2, 3, 4, 5, 6, 7], 4);

function insertionSort(numArr: number[]): number[] {
  let length = numArr.length;
  let arr: number[] = [];

  if (length == 0) {
    console.log(arr);
  } else if (length == 1) {
    arr.push(numArr[0]);
    console.log(arr);
  } else if (length == 2) {
    if (numArr[0] > numArr[1]) {
      arr.push(numArr[1]);
      arr.push(numArr[0]);
    } else {
      arr.push(numArr[0]);
      arr.push(numArr[1]);
    }
    console.log(arr);
  } else if (length == 3) {
    let insert = numArr[2];

    if (numArr[0] > numArr[1]) {
      arr.push(numArr[1]);
      arr.push(numArr[0]);
    } else {
      arr.push(numArr[0]);
      arr.push(numArr[1]);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      if (insert > arr[i]) {
        console.log(`insert > ${arr[i]}`);
        arr.splice(i + 1, 0, insert);
        break;
      }
    }
    console.log(arr);
  }
  return arr;
}

insertionSort([1]);
insertionSort([1, 3]);
insertionSort([3, 1]);
insertionSort([1, 3, 2]);
