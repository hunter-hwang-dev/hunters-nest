//parent 1 클릭 시 sub-tree 접히게 하는 것부터 구현하기

const parent1 = document.getElementById("parent-1");
const subtree1 = document.getElementById("parent-1-sub");
parent1.addEventListener("click", function () {
  subtree1.classList.toggle("display-none");
});
