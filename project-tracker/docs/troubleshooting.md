# 🏛️ git init 이후의 변천사 ⏳

## 🚧 SyntaxError

### 🚨 <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">Cannot use import statement outside a module</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

1. 가장 최상단에서 실행되는 파일에 `<script> type="module"` 태그 추가
2. 루트 디렉토리에 있는 `package.json` 파일에 `"type": "module"`를 추가

### 🚨 <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">Cannot use import statement outside a module</span> <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">해결</span>

1. 가장 최상단에서 실행되는 파일에 `<script> type="module"` 태그 추가
2. 루트 디렉토리에 있는 `package.json` 파일에 `"type": "module"`를 추가

<div style="height: 8px; background-color: #333; margin-top: 16px; margin-bottom: 16px"></div>

# 🗿 git init 이전의 변천사 🦕

## 👎 기능 구현 미흡

### ⚠️ <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">탭 비활성화 시 favicon 바꾸기 어렵다</span>

<div class="indent" style="padding: 0 0 0 30px">
예컨대, 유튜브에서 탭이 비활성화 되어있는데도 영상 재생시키면 낭비겠지? 이런 상황에서 탭의 활성화 여부를 체크하는 방법이 있다.

- Window.onfocus and Window.onblur (레거시, 현재 비추)
- The page Visibility API (2019년 부로 전 브라우저에서 지원됨)

그러나 위 방법을 여러 번 써보아도, 탭 전환시 브라우저 기본 favicon이 되는 오류가 발생했다. 정확한 원인은 깊은 공부가 필요할 것 같아 이렇게만 우선 기록한다.

</div>

## 💾 버전 관리 이슈

### 🚨 <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">hunters-nest/project-tracker를 git init했다가 되돌림</span>

<div class="indent" style="padding: 0 0 0 30px">개발 블로그에 project-tracker 외에도 여러 기능이 추가될 것이기에, hunters-nest를 레포지토리로 두고 branch로 기능별 관리를 해야 함. 기본적인 파일 구조를 정리한 뒤에 init한 것이라 rm -r .git으로 삭제 시도했으나 실패.</div>

### ✅ <span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">vs code 끄고, 탐색기에서 project-tracker/.git 폴더 삭제해 해결</span>

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

5. `📁assets` 내에 들어갈 파일의 경로를 자꾸 이동하다 보니, `👉index.html`과 `📜script.js` 안의 내용을 자꾸 수정해야 했다. 프로젝트가 커질수록 파일 경로 문제가 생길 것 같았다. `환경 변수`를 저장하는 스크립트를 따로 `📜paths.js`로 두어 이들을 `📁src`에 한데 묶었다.

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
