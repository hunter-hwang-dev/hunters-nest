// export function generateTreeHTML(node) {
//   // assets/treeData.js의 변수 변환
//   if (!node) return ""; // 노드가 없으면 빈 문자열 반환

//   // 현재 노드가 최상위 ROOT 노드라면 내부 자식만 렌더링
//   if (node.value === "ROOT") {
//     return `<ul class="tree">${node.children
//       .map(generateTreeHTML)
//       .join("")}</ul>`;
//   }

//   // 자식 노드가 있다면 하위 <ul>을 추가하여 트리 구조 생성
//   const childrenHTML =
//     node.children.length > 0
//       ? `<ul class="sub-tree">${node.children
//           .map(generateTreeHTML)
//           .join("")}</ul>`
//       : "";

//   return `
//     <li>
//       <div class="folder">${node.value}</div>
//       ${childrenHTML}
//     </li>
//   `;
// }
