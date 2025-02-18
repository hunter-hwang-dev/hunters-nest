export function bubbleSort(numArr: number[]): number[] {
  let arr = [...numArr];
  let swapped: boolean;

  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false; //각 바깥 루프에서 swapped 초기화.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    } //하나도 안 바뀌었다 = 이미 작은 루프에서 asc 정렬 되어 있다

    if (!swapped) {
      break; //큰 루프 빠져나오기
    }
  }

  return arr;
}

//for문 중첩 2개 -> 시간 복잡도 O(n^2)
//그런데 numArr가 완벽히 asc 정렬되었을 경우, O(n)
//numArr = [3, 7, 1, 2, 5] 같은 식으로 중간에 swapped = false 체크되는 경우도 있음.
