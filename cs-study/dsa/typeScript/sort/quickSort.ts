function partition(arr: number[], l: number, h: number): number {
  const pivot = arr[h];
  let i = l - 1;

  for (let j = l; j < h; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
  return i + 1;
}

function quickSort(arr: number[], l = 0, h?: number) {
  if (h === undefined) {
    h = arr.length - 1;
  }

  if (l < h) {
    const pivotIndex = partition(arr, l, h);

    if (pivotIndex - 1 > l) quickSort(arr, l, pivotIndex - 1); // 왼쪽 정렬
    if (pivotIndex + 1 < h) quickSort(arr, pivotIndex + 1, h); // 오른쪽 정렬
  }
}
let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
quickSort(my_array);
console.log(my_array);
