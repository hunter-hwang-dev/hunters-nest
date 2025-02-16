// const numberCards = document.getElementById("number-cards");
// const button = document.getElementById("next");

// var numbers = [7, 12, 9, 4, 11];
// var currLowest = numbers[0];
// numbers.forEach((num, i) => {
//   //화면에 카드 뿌리기
//   const newDiv = document.createElement("div");
//   newDiv.textContent = num;
//   newDiv.id = i;
//   numberCards.appendChild(newDiv);
// });

// function lower(a, b) {
//   return Math.min(a, b);
// }

// function findLowest(arr) {
//   arr.forEach((num, i) => {
//     setTimeout(function () {
//       const currCard = document.getElementById(`${i}`);
//       currCard.style.backgroundColor = "#04aa6d";
//       currLowest = lower(currLowest, num);
//       if (currLowest == num) {
//         currCard.style.backgroundColor = "black";
//       }
//       console.log(`${currLowest}가 현재 제일 작음`);
//     }, i * 500);
//   });

//   return currLowest;
// }

// function buttonDisable() {
//   button.textContent = "찾았어요!"; // 버튼 문구 변경
//   button.removeEventListener("click", handleClick); // 이벤트 리스너 제거
//   button.style.backgroundColor = "#272727";
//   button.disabled = true; // 버튼 비활성화 (클릭 자체가 불가능)
// }

// button.addEventListener("click", () => {
//   findLowest(numbers);
//   buttonDisable();
// });
