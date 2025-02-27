# 🏛️ git init 이후의 변천사 ⏳

## 🏗️ 프로젝트 구조 정리 시행착오

7. 확장성을 생각해 폴더를 최대한 나누어놓았는데, 늘이고 줄이면서 최적의 구조를 찾고자 함이다.

```
└── 📁project-tracker
    └── 📁assets
        └── 📁icons
            └── 🏞️...
        └── 📁screenshots
            └── 🏞️...
        └── 🖍️style.css
        └── 🏔️favicon.ico
        └── 💾treeData.js🆕 // Tree형 자료구조 테스트 위한 더미 데이터
    └── 📁docs
        └── ✍️...
    └── 📁src
        └── 📁config🆕 // 환경변수, 이미지 경로 등
            └── 📜assetPaths.js
        └── 📁utils🆕 // class 정의 모음
            └── 📜tree.js
        └── 📜script.js
    └── 👉index.html
    └── 😴.gitignore
    └── 📦package.json🆕 // "type": "module" 쓰려고
```

## 🐒 지루하지만 스스로 refactor할 수 있어

### 👶 <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">처음 켤 때 sub-tree 닫아두기</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

## 📈 검색해야 알아낼 수 있는 것들로 코드 개선!

### 😳 <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">파일 든 폴더 닫을 때도 svg 변경</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span> 더 나은 솔루션?

```
const currentIcon = getComputedStyle(event.target).getPropertyValue(
        "--icon"
      );
```

### 😳 <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">stylesheet만 이용해서 img 끼워넣는 법</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

```
.folder::before {
  content: var("이미지경로");
}
```

### 😳 <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">img 어떻게 끼워넣지?</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

```
const folders = document.getElementsByClassName("folder");

//folder-closed.svg 경로 담은 img tag 생성
const folderIcon = document.createElement("img");
folderIcon.src = "assets/icons/folder-closed.svg";
folderIcon.style.width = "18px";
folderIcon.style.height = "18px";

for (const folder of folders) {
  folder.prepend(folderIcon.cloneNode()); // cloneNode()로 각 폴더에 독립적인 이미지 생성
}
```

- `getElementsByClassName`은 `HTMLCollection`을 반환하기 때문에, `forEach` 메서드를 직접 사용할 수 없음.<br>
  (Array-like가 아니라 찐 `Array`여야)
- `JavaScript`에서 `.cloneNode()` 후 일일이 `.prepend`해주어 시간이 걸림: 새로고침 시 "깜빡이는" 현상 발생

1. 눈아픔 방지 및 효율 위해, 초기 세팅은 정적으로 stylesheet에서 처리해야 함.

### 😳 <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">feat: parent 층위 toggle 하드코딩</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">child까지 단번에 해결!</span> 👽

```
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("folder")) { //folder 클릭되면
    const subtree = event.target.nextElementSibling; //무조건 folder 다음 tag를 찾는다.
    if (subtree && subtree.classList.contains("sub-tree")) { //folder 다음에 태그가 있고, 그 클래스가 sub-tree인 경우
      subtree.classList.toggle("display-none");
    }
  }
});
```

## 🎓 CS 공부가 필요해

### 😨 <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">Tree 구조 및 표기법은 아는데, JS로 적은 함수는 어려워!</span>

## 🚧 카테고리별로 Error 묶으면 보기 좋을 듯!

### 🚨 <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">에러 메시지 내용</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>(했을 때에만 딱지 붙이기)

- 원인 분석을
- 순서에 상관없이
- 정렬해 둡니다.

1. 그에 맞는 해결책을
2. 시행착오, 또는 순차에 따라
3. 번호로 적어 둡니다. 해결 시, 뒤에 이 말을 붙여 끝냅니다: 해결!

## 🚧 404 Not Found

### 🚨 <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)"> GET ...project-tracker/src/tree net::ERR_ABORTED 404 (Not Found)</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

- ERR_ABORTED: 요청이 중단(Aborted), 주로 파일이 없거나 경로가 잘못되었을 때
- 404 (Not Found): 서버가 요청한 파일(tree)을 찾을 수 없다
- 즉, `Tree` 클래스만 export하고 `TreeNode`는 가져오지 않아 생긴 문제. 직접 안 갖다 써도 필요!

1. `export { Tree, TreeNode }` 로 수정, 해결!

## 🚧 SyntaxError

### 🚨 <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">Cannot use import statement outside a module</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

1. `index.html`의 `<script src="src/script.js"/>"` 태그에 `type="module"` 속성 추가
2. 터미널 커맨드 `npm init -y`로 루트 디렉토리에 `package.json` 파일 (기본값 포함) 생성
3. `package.json`에 `"type": "module"` 추가, 해결!

<div style="height: 8px; background-color: #333; margin-top: 16px; margin-bottom: 16px"></div>
