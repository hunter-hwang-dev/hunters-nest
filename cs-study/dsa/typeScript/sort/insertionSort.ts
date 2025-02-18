export function insertionSort(numArr: number[]): number[] {
  let arr = [...numArr];

  for (let i = 1; i < arr.length; i++) {
    let insert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > insert) {
      //insert보다 큰 값은 오른쪽으로 이동
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = insert;
  }

  return arr;
}
insertionSort([1, 7, 6, 4, 3]);
