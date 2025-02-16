// const numberCards = document.getElementById("number-cards");
// const button = document.getElementById("next");

// var numbers = [0, 1];
// var count = 1;

// function handleClick() {
//   numbers.push(numbers[count] + numbers[count - 1]);
//   count++;

//   const newDiv = document.createElement("div");
//   newDiv.textContent = numbers[count];
//   numberCards.appendChild(newDiv); //string 아닌 node를 추가해야

//   if (count >= 20) {
//     button.textContent = "이런 식으로 계속!"; // 버튼 문구 변경
//     button.removeEventListener("click", handleClick); // 이벤트 리스너 제거
//     button.style.backgroundColor = "#272727";
//     button.disabled = true; // 버튼 비활성화 (클릭 자체가 불가능)
//   }
// }
// button.addEventListener("click", handleClick);
