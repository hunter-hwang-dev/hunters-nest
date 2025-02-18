// import { testArr1, testArr2 } from "../data";

// // [1, 2, 3, 4, 5, 6, 7], 4
// function insert(numArr: number[], insert: number): number[] {
//   let arr = [...numArr];
//   let inserted = false;

//   for (let i = arr.length; i >= 0; i--) {
//     if (arr[i] <= insert) {
//       arr.splice(i + 1, 0, insert);
//       inserted = true;
//       break;
//     }
//   }

//   if (!inserted) {
//     //arr[i]가 전부 insert보다 큰 경우
//     arr.splice(0, 0, insert);
//   }

//   console.log(arr);
//   return arr;
// }

// insert([1, 2, 3, 4, 5, 6, 7], 4);
// insert([1, 2, 3, 4, 5, 6], 0);
// insert([1, 2, 3, 4, 5, 6], 12);

// function insertionSortEmpty(numArr: []): number[] {
//   //빈 배열인 경우
//   return [];
// }

// function insertionSort0(numArr: [number]): number[] {
//   //항이 1개짜리, 즉 최대 인덱스가 0인 배열인 경우
//   return numArr;
// }

function insertionSort(numArr: number[]) {
  let [slice, insert] = [numArr.slice(0, -1).sort(), ...numArr.slice(-1)];
  console.log(slice, insert);

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
    slice.splice(0, 0, insert);
  }

  console.log(slice);
}

insertionSort([3, 5, 2, 7]);
