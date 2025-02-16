// 참고: node sort.js 명령어로 터미널에서 콘솔 실행 가능. html 없어도 됨!

/*
====bubbleSort==============================================
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

/*
====selectionSort==============================================
큰 루프: 0부터 n-1 > 0부터 n-2 ... > 0부터 1 임에 주의!
작은 루프: 이 안에서 가장 작은 녀석을 "선택"해 맨 앞으로 끌고 오기.
=============================================================
*/

function selectionSort(array) {
  var arr = [...array];
  var selection = arr[0]; //항이 하나라도 있어야 되긴 함.

  for (let j = 0; j < arr.length; j++) {
    //작은 루프
    if (arr[j] < selection) {
      console.log(arr[j], "<- 얘가", selection, "보다 작네");
      arr[0] = arr[j];
      arr[j] = selection;
    }
  }

  return arr;
}

//console.log(bubbleSort(testArr1));
console.log(selectionSort(testArr1));
