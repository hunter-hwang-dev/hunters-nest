import { testArr1, testArr2 } from "../data";

function insertionSort(numArr: number[]): number[] {
  if (numArr.length == 0) {
    return [];
  } else if (numArr.length == 1) {
    return [numArr[0]];
  } else {
    let [slice, insert] = [
      insertionSort(numArr.slice(0, -1)),
      ...numArr.slice(-1),
    ];

    let inserted = false;
    for (let i = slice.length - 1; i >= 0; i--) {
      if (slice[i] > insert) {
      } else {
        slice.splice(i + 1, 0, insert);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      slice.unshift(insert); //slice.splice(0, 0, insert);
    }

    return slice;
  }
}

// 재귀 없이 구현 가능: 한 번 해보기

function insertionSort2(numArr: number[]): number[] {
  let arr = [...numArr];

  for (let i = 1; i < numArr.length; i++) {
    let insert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > insert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = insert;
  }

  console.log(arr);
  return arr;
}

// console.log(insertionSort([]));
// console.log(insertionSort([3]));
// console.log(insertionSort([3, 5]));
// console.log(insertionSort([3, 5, 6]));
// console.log(insertionSort([3, 5, 6, 4]));
// console.log(insertionSort(testArr1));
// console.log(insertionSort(testArr2));

insertionSort2([]);
insertionSort2([3]);
insertionSort2([3, 5, 7, 4]);
