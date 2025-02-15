const numberCards = document.getElementById("number-cards");
const button = document.getElementById("next");

var numbers = [64, 34, 25, 12, 22, 11, 90, 5];
var currLowest = numbers[0];
numbers.forEach((num, i) => {
  //화면에 카드 뿌리기
  const newDiv = document.createElement("div");
  newDiv.textContent = num;
  newDiv.id = i;
  numberCards.appendChild(newDiv);
});

function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
    }
  }
}
function buttonOff() {
  button.style.backgroundColor = "#272727";
  button.textContent = "이제 코드를 작성하면 됩니다"; // 버튼 문구 변경
  button.disabled = true; // 버튼 비활성화 (클릭 자체가 불가능)
}

button.addEventListener("click", function () {
  bubbleSort(numbers);
  buttonOff();
});
