export function radixSort(arr: number[]): number[] {
  let radixArray = [[], [], [], [], [], [], [], [], [], []];
  let maxVal = Math.max(...arr);
  let exp = 1;

  while (~~(maxVal / exp) > 0) {
    arr.forEach((element) => {
      radixArray[~~(element / exp) % 10].push(element);
    });

    arr = [];
    radixArray.forEach((subArray) => {
      subArray.forEach((element) => arr.push(element));
    });

    radixArray = [[], [], [], [], [], [], [], [], [], []];
    exp *= 10;
  }

  return arr;
}
