import { testArr1, testArr2 } from "../data";

function insertionSort(numArr: number[]): number[] {
  let arr = [...numArr];

  for (let i = 1; i < arr.length; i++) {
    //비교할 마지막 대상: arr[i]
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        //arr[0] ~ arr[i-1] 중에서 작은 거 발견하면 이동
        [arr[j], arr[i]] = [arr[i], arr[j]];
        break; //그런데 재귀적으로, arr[0] ~ arr[i-1]은 이미 asc sort되어 있을 것이니 스왑하자마자 작은 루프 나가기
      }
    }
  }
  console.log(arr);
  return arr;
}

insertionSort(testArr1);

// function insertion(baseArr: number[], insert: number): number[] {
//   let arr = [...baseArr];
//   for (let j = arr.length - 1; j >= 0; j--) {
//     if (arr[j] > insert) {
//       console.log(`${arr[j]} 앞에 ${insert}`);
//       arr.splice(j, 0, insert);
//       break;
//     }
//   }

//   return arr;
// }

// console.log(insertion([1, 3, 5], 4));
