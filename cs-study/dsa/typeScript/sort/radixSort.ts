let testArr = [170, 45, 75, 90, 802, 24, 2, 66];

radixSort(testArr);

function radixSort(arr: number[]): number[] {
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

    console.log(arr);
    console.log(radixArray);
    exp *= 10;
  }

  return arr;
}
