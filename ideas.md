<div class="idea-block">
    <div class="title">마크다운 안에 달력 표시하는 법?</div>
    <div class="content"></div>
</div>

<div class="idea-block">
    <div class="title">VS code에서 (docs 작성할 때) 현재 시간을 입력해주는 snippet 만들기</div>
    <div class="why-needed">Extension에서 `time snippet` 키워드로 검색해 봤는데 원하는 게 안 나옴</div>
    <div class="why-not-needed">구글링해 보니 `Jakub Synowiec의 Insert Date String` 쓰면 된다고 함.</div>
    <div class="solution"><span id="">`익스텐션 currentTime 입력 단축키 Ctrl+Shift+I`</span></div>
</div>

<div class="idea-block">
    <div class="title">커스텀 `<span id="">` 자동완성 snippet 만들기</div>
    <div class="why-needed">일일이 치는게 귀찮음. `<span id="quick-idea-snippet">(`rm`: `remove`, `-r`: 하위 디렉토리도 지워주세요)</span>` 너무 길어 </div>
    <div class="why-not-needed"></div>
    <div class="solution"></div>
</div>

<div class="idea-block">
    <div class="title">내가 손수 작성한 file tree 변천사 같은 이모지 추가 file tree generator 익스텐션 만들기</div>
    <div class="why-needed">나중에 자동화 할라고.</div>
    <div class="why-not-needed">배보다 배꼽이 크다</div>
    <div class="solution"></div>
</div>

<div class="idea-block">
    <div class="title">계정 vs code가 verified 한 거 아니라고 막 겁줌</div>
    <div class="solution">그래서 github 페이지 찾아봄. 에휴 무섭기도 하니 나도 나중에 나만의 (폴더 경로 마크다운 제작) 플러그인 만들어볼까 싶음
</div>

<div class="idea-block">
    <div class="title">
기존의 블로그 포맷 (velog, notion 같은)이 레이아웃 자유도가 떨어진다는 이유로 새 기능 고민했고, 진짜 짧은 것들 (주로 터미널 커맨드나, vs code 단축키, 아니면 언어별 자료형 빨리찾기 같은 일종의 사전, 책 뒷편의 인덱스-한줄정리 같은 것)을 위한 레이아웃이 따로 필요함을 느꼈음.</div>
    <div class="why-needed">나중에 자동화 할라고.</div>
    <div class="why-not-needed">배보다 배꼽이 크다</div>
    <div class="solution">한번은 raw json에다가 이러한 문제를 정리했지만, 그거 진짜 사람 할 짓이 못됐다. 그래서 전용 form을 만들어서 모아둘까 생각했는데 그것도 화면만 입력창으로 바뀌었지 비효율적임.
그래서, 이런 식으로 하나의 기능 branch마다 하나의 README.md (사실은 프로젝트 소갯말이 아니니 DONOTREADME.md 같은 이름이 붙어야겠지만)를 만들고, 그 마크다운 중간에다가
아 이거! 나중에 쓸모 있겠는데. 싶은 글을 `<span id="quick-idea-snippet"></span>` 태그로 감싸자는 아이디어를 냈다. 마크다운 문법은 html tag를 받아들이고, `<span />`은 정말 아무 의미 없으니 딱이다. 그 다음에 각 README.md 별로 `<span />` 태그만 모아서 DB에 잘 파싱해 넣는 자동화 하면 되겠는걸.</div>
</div>

### ⚠️ <span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">나중에 쓸모 있을 글은 span 태그로 감싸자</span>

#### 마크다운에서 달력 쓰는 법

| Mon | Tue | Wed | Thu | Fri | Sat | Sun |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|     |     |     |     | 14  | 15  | 16  |
| 17  | 18  | 19  | 20  | 21  | 22  | 23  |
| 24  | 25  | 26  | 27  | 28  |  1  |  2  |
|  3  |  4  |  5  |  6  |  7  |  8  |  9  |
| 10  | 11  | 12  | 13  | 14  |     |     |

기본값이 설정된 package.json 파일이 자동 생성 `npm init -y`
