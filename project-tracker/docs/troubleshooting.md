# 🏛️ git init 이후의 변천사 ⏳

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

# 🗿 git init 이전의 변천사 🦕

## 🧟 방법이 정말 없나?

### ⚠️ <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">탭 비활성화 시 favicon 바꾸기 어렵다</span>

<div class="indent" style="padding: 0 0 0 30px">
예컨대, 유튜브에서 탭이 비활성화 되어있는데도 영상 재생시키면 낭비겠지? 이런 상황에서 탭의 활성화 여부를 체크하는 방법이 있다.

- Window.onfocus and Window.onblur (레거시, 현재 비추)
- The page Visibility API (2019년 부로 전 브라우저에서 지원됨)

그러나 위 방법을 여러 번 써보아도, 탭 전환시 브라우저 기본 favicon이 되는 오류가 발생했다. 정확한 원인은 깊은 공부가 필요할 것 같아 이렇게만 우선 기록한다.

</div>

## 💾 버전 관리 이슈

### 🚨 <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">hunters-nest/project-tracker를 git init했는데, 되돌리고파!</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

- 개발 블로그에 project-tracker 외에도 여러 기능이 추가될 것이기에, hunters-nest를 레포지토리로 두고 branch로 기능별 관리를 해야 함.
- 기본적인 파일 구조를 정리한 뒤에 init한 것이라 `.git` 지우고 새로 init repository 해주면 되는 상황.

1. vs code 터미널에서 `rm -r .git`으로 삭제 여러 번 시도, 권한 문제로 실패
2. 나 스스로를 못 지우는구나! vs code 끄고, 탐색기에서 `project-tracker/.git` 폴더 삭제, 해결!

## 🏗️ 프로젝트 구조 정리 시행착오

솔직히 project structure는 너무 케바케, 취향을 타는 부분이다. 나에게 잘 맞고 또 프로젝트의 특성에 맞는 방식을 찾기 위해 내가 선택한 방식을 소개하겠다.

1. 냅다 원하는 위치에 빈 프로젝트 폴더를 만든다.

```
└── 📁project-tracker
```

2. index.html 안에 모든 `<style />`과 `<script />`를 담는다. <br>
   나는 폴더 아이콘 클릭 시 열림 표시되는 정도만 구현했고, 필요한 `svg` 파일을 임베드했다.

```
└── 📁project-tracker
    └── 👉index.html
    └── 🏞️folder-closed.svg
    └── 🏞️folder-open.svg
```

3.  `HTML + JS + CSS` 삼총사로 파일을 쪼갠다. <br>
    슬슬 정신이 없어지니 아이콘을 `icons` 폴더에 모은다.

```
└── 📁project-tracker
    └── 📁icons
        └── 🏞️folder-closed.svg
        └── 🏞️folder-open.svg
    └── 👉index.html
    └── 📜script.js
    └── 🖍️style.css
```

4. 탭 활성화 여부에 따라 `favicon`을 다르게 적용하려 했지만 <span id="talk-later"> [실패!](#-기능-구현-미흡) </span> 중간 과정에 favicon이 너무 많아 한 폴더로 정리했다가, 거두절미하고 하나의 `🏔️favicon.ico` 만을 남겼다. '꾸미기용' 파일을 `📁assets`에 모았다.

```
└── 📁project-tracker
    └── 📁assets
        └── 📁icons
            └── 🏞️...
        └── 🏔️favicon.ico
        └── 🖍️style.css
    └── 👉index.html
    └── 📜script.js
```

5. `📁assets` 내에 들어갈 파일의 경로를 자꾸 이동하다 보니, `👉index.html`과 `📜script.js` 안의 내용을 자꾸 수정해야 했다. 프로젝트가 커질수록 파일 경로 문제가 생길 것 같았다. `환경 변수`를 저장하는 스크립트를 따로 `📜paths.js`로 두어 이들을 `📁src`에 한데 묶었다. (단, `import/export` 문법 쓰려면 `package.json`이 필요함. 나중에 `src/tree.js` 가져올 때 알았음)

```
└── 📁project-tracker
    └── 📁assets
        └── 📁icons
            └── 🏞️...
        └── 🏔️favicon.ico
        └── 🖍️style.css
    └── 📁src
        └── 📜paths.js
        └── 📜script.js
    └── 👉index.html
```

6. 프로젝트를 진행하다 보면 나중에 로드맵 및 트러블슈팅을 정리하는 것이 까다롭다. `📁docs` 에 필요한 마크다운을 모아두었다. 여기에 첨부할 이미지들은 대부분 화면 스크린샷이므로, `📁assets` 에 `📁screenshots` 폴더를 추가해 주었다.

```
└── 📁project-tracker
    └── 📁assets
        └── 📁icons
            └── 🏞️...
        └── 📁screenshots
            └── 🏞️...
        └── 🏔️favicon.ico
        └── 🖍️style.css
    └── 📁docs
        └── ✍️...
    └── 📁src
        └── 📜paths.js
        └── 📜script.js
    └── 👉index.html
    └── 😴.gitignore
```

여기까지가 `hunters-nest`를 통째로 `git init`하기 전의 `troubleshooting` 진행상황이다. 버전 관리를 시작하면 일일이 복기해서 정리할 필요가 없다. (해당 commit에 들어가 file tree 내놓으라고 하면 되기 때문이다.) 이상 끝!
