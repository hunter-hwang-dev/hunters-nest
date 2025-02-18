function mergeSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = ~~(arr.length / 2);
  let leftHalf = arr.slice(0, mid); //index가 (0 ~ mid-1) 인 부분
  let rightHalf = arr.slice(mid); //index가 (mid ~ 끝까지) 인 부분

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  console.log(leftHalf, rightHalf);
  return merge(sortedLeft, sortedRight);
}

mergeSort([1, 3, 3, 24, 3, 7, 1]);

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }

    result.push(...left.slice(i));
    result.push(...right.slice(j));
  }

  return result;
}
