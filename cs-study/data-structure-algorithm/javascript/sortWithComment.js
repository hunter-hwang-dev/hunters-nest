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

bubbleSortWithComment(testArr1);
