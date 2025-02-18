import { testArr1, testArr2 } from "../data";

// [1, 2, 3, 4, 5, 6, 7], 4
function insert(numArr: number[], insert: number): number[] {
  let arr = [...numArr];
  let inserted = false;

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] <= insert) {
      arr.splice(i + 1, 0, insert);
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    //arr[i]가 전부 insert보다 큰 경우
    arr.splice(0, 0, insert);
  }

  console.log(arr);
  return arr;
}

insert([1, 2, 3, 4, 5, 6, 7], 4);
insert([1, 2, 3, 4, 5, 6], 0);
insert([1, 2, 3, 4, 5, 6], 12);
