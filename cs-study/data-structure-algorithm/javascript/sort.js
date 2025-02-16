// 참고: node sort.js 명령어로 터미널에서 콘솔 실행 가능. html 없어도 됨!

/*
====bubble sort==============================================
큰 루프: 0부터 n-1 > 0부터 n-2 ... > 0부터 1 임에 주의!
작은 루프: 한 쌍씩 대조해 가며 큰 수를 뒤로 "거품처럼" 올리기.
1. 뒤에 수가 더 큼: 냅둬, 2. 앞의 수가 더 큼: 바꿔.
=============================================================
*/

const testArr1 = [7, 9, 11, 3, 12];

function bubbleSort(array) {
  var arr = [...array];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        var bubble = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = bubble;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(testArr1));
