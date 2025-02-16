const testArr1 = [7, 9, 11, 3, 12];

function bubbleSortWithComment(array) {
  var arr = [...array]; //편집 가능하게 복사

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      console.log(arr[j - 1], arr[j], "버블 올려 말어?");
      if (arr[j - 1] > arr[j]) {
        console.log("업.");
        var bubble = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = bubble;
      } else {
        console.log("ㄴㄴ 현상 유지");
      }
      console.log(arr[j - 1], arr[j], arr);
      console.log("");
    }
    console.log("작은 루프 한바퀴!");
  }

  console.log("");
  return arr;
}

function selectionSortWithComment(array) {
  var arr = [...array];
  var selectionIndex = 0; //항이 하나라도 있어야 되긴 함.
  var minSelection = arr[selectionIndex];

  for (let j = 0; j < arr.length; j++) {
    //작은 루프
    console.log(arr[j], minSelection, "비교 중...");
    if (arr[j] < minSelection) {
      console.log(arr[j], "<- 얘가", minSelection, "보다 작네!!!");
      minSelection = arr[j]; //바꾸진 않고 저장만 해 둠
    } else {
      console.log(minSelection, "보다 더 작은 놈이 아직 안 나왔음.");
    }
    console.log("");
  }
  console.log(
    "작은 루프 한바퀴 돌았고, 빈 자리 중 제일 앞으로 보낼 숫자: ",
    minSelection,
    "를(을)",
    arr[selectionIndex],
    "과(와) 스와핑"
  );

  var temp = arr[selectionIndex];
  arr[selectionIndex] = minSelection; //아까 비교한 것 중, 저장한 작은 놈을 앞쪽에 넣기

  console.log(arr);
  return arr;
}

//bubbleSortWithComment(testArr1);
selectionSortWithComment(testArr1);
