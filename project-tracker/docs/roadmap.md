# 🏙️PROJECT-TRACKER ROADMAP 🪂

## 💲 정기 결제 중인 상품

<span class="highlight pink" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 245, 0.5)">Figma & FigJam</span> Monthly, `2025-02-14`, 33,024원 ($22 = $15 + $5 + 10% tax)

### 🔜 구독 취소 예정 리스트

<span class="highlight pink" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 245, 0.5)">Figma & FigJam</span> `3월 초 이전에 취소` 한 달 분량만 사용, 플랜 취소 약관 확인 후!

## 일일 목표

- 하루에 (삽질, 공부하는 시간 포함) 4시간 개발을 목표로 하되, 꼭 매일 할 필요는 없음. 주말은 쉬고, 주 4일제 정도라고 생각하기.
- 개발 외에도 매일 30분씩 운동, 삼시세끼 잘 챙겨먹기, 7시간 이상 숙면하기를 꼭 지킬 것. 건강이 우선!

## 🗺️ 왜 시작했고, 지금 어디?

#### `2025-02-14 금요일` 밤에 시작함

✨ <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">시작일</span>

<span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">발제</span> 개발 블로그를 처음부터 만드는 것은 부담스러워!

<span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">MVP</span> 진행 상황을 간결하게 기록, 공유하는 트래커부터 만들자.

🏗️ <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 프로젝트 구조 수정 #1 - #6</span>

#### `2025-02-15 토요일` 열정 활활 밤새 불타다

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 첫 커밋 & 레포지토리 게시</span>

<details style="padding-bottom: 8px;">
<summary style="padding-bottom: 8px">&nbsp;&nbsp;<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">event.target으로 class 토글</span>
</summary>

- 하단 디렉토리를 하나의 태그로 묶어, `display: none;` 담긴 class 떼다 붙였다 `toggle`해 구현
- 트리형 자료와 알맞는 `tag`? `ul > li` 구조
- [하드코딩 후 범용성 고민](troubleshooting.md/#-미흡한-기능-개선): `event.target` 활용해 해결!
- 예상 소요 시간은 `20분` 이었으나, 실제 구현까지 `1시간 20분` 가량 걸림. 다음 `바로 할 일`은 처음 떠오르는 예상 시간에 `* 6` 할 것.</details>

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">#1 첫 머지</span>

<details style="padding-bottom: 8px;">
<summary style="padding-bottom: 8px">&nbsp;&nbsp;<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">src/tree.js 가져오기</span>
</summary>

- https://www.30secondsofcode.org/js/s/data-structures-tree/ 의 예시 코드를 사용함
- 새로 만든 `tree` 인스턴스에 `TreeNode`를 하나씩 추가
- 각 `TreeNode` class 인스턴스의 `key`가 ROOT부터 해당 node까지의 순서를 모아둔 것임을 체감</details>

<details style="padding-bottom: 8px;">
<summary style="padding-bottom: 8px">&nbsp;&nbsp;<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">이모지로 때웠던 폴더를 svg로 재교체</span>
</summary>

- 예상 소요 시간은 `1시간 * 6 = 6시간` 이었으나, 실제 구현까지 `20분` 가량 걸림. 갈피를 못 잡겠군!
- 아직 초보니까, 시행착오하면서 걸리는 시간이 길다. 다음 할 일은 직감을 그대로 따라 예상 시간을 잡아 보자.</details>

<details style="padding-bottom: 8px;">
<summary style="padding-bottom: 8px">&nbsp;&nbsp;<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">svg를 stylesheet에서 끼워넣기</span>
</summary>

- 예상 소요 시간은 `30분` 이었으나, 실제 구현까지 `5분` 가량 걸림.
- 역시 기능을 최대한 잘게 잘라서 차근차근 구현하니 진도가 빠름!</details>

<details style="padding-bottom: 8px;">
<summary style="padding-bottom: 8px">&nbsp;&nbsp;<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">folder 클릭해 sub-tree 열렸을 때 svg 경로 교체</span>
</summary>

- 열고 닫는 그림 반대인 부분도 [수정함](troubleshooting.md/#-처음-켤-때-sub-tree-닫아두기-해결)
- 예상 소요 시간은 `1시간` 이었으나, 실제 구현까지 `30분` 가량 걸림.</details>

<details style="padding-bottom: 8px;">
<summary style="padding-bottom: 8px">&nbsp;&nbsp;<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)">안에 sub-tree가 있는 folder svg 교체</span>
</summary>

- 이미지 찾기 `30분` 예상, 검색 결과 시원치 않아 svg 뜯어 컬러 코드 수정. `10분` 가량 걸림.
- 코드 구현 `20분` 예상, getComputedStyle(event.target)으로 저장해야 함을 몰랐음. `26분` 가량 걸림.</details>

🏗️ <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 프로젝트 구조 수정 #7</span>

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> #2 번째 머지</span>

#### `2025-02-16 일요일` <span class="highlight sub-branch" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(65, 37, 11, 0.65)">cs-study/dsa</span> n-ary tree 구현 위해, array 정렬 알고리즘부터 살펴보기

#### `2025-02-17 월요일` <span class="highlight sub-branch" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(65, 37, 11, 0.65)">cs-study/dsa</span> bubble, selection, insertion, quick, radix, merge sort 중 되는 것부터 구현

#### `2025-02-18 화요일` <span class="highlight sub-branch" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(65, 37, 11, 0.65)">cs-study/dsa</span> linked list, binary tree 살펴보기

OS가 파일 디렉토리 관리하는 방법?
사용자에게: n-ary tree로 보여주는 것이 맞다.

실제 저장은: OS마다 다름

1. FAT (File Allocation Table): 옛날 방식. linked list
2. NTFS (New Technology File System): 요즘 방식.
   a. 파일 찾을 땐: Master File Table (MFT) 에서 찾음
   b. B-tree structure 사용한다고.
3. ext4 (Extended Filesystem 4, used in Linux)
   a. 각 file/directory가 inode 갖고 있는 inode table
   b. 각 directory가 가리기는 inodes 따라 tree 모양 구조가 나옴
   c. 내부에선 파일 찾기 쉽게 B-tree 씀
4. APFS (Apple File System): SSD 최적. B-tree structure

궁금한 질문:

- OS 만드는 수업도 있던데, 99.9%는 학습용이겠지만 진짜 잘하는 사람은 어디로 갈까? 이미 점유 다 된 상태에서 처음부터 개발을 하나? 아 닌텐도 게임기 같은 경우.
- 배보다 배꼽 안 크려면 OS는 low level 언어로 짜야겠네:
  a. x86 같은 칩의 초기 부트 코드는 어셈블리
  b. 왠만한 현대 OS의 기틀은 싹 다 C로 작성
  c. 몇몇 유저가 조작하는 요소는 C++로 쓰기도 함
  d. 근데 고질적 메모리 문제 열 받아서, C/C++ 대체용으로 만든 Rust로 갈아타려고 하는 중

또 궁금한 질문: 그러면 Rust는 어느 정도로 low level인 거임? 잠금 풀면 거의 C/C++ 레벨임. 그래서 하이브리드 언어라고 부른다고.. 흠.

- 포인터, 직접 메모리 접근이 가능함
- unsafe로 잠깐 열어서 하드웨어 레지스터 접근 가능
  a. 하드웨어 초기화 (부트 단계)
  b. 센서 값 읽기 & 모터 제어 (임베디드)
  c. 그래픽 카드, 사운드 카드 직접 제어 (커널 드라이버)
- Rust 표준 라이브러리(std) 끌 수 있어 runtime 제거 가능

사이드로 빠졌다가 다시 돌아옴.

#### `2025-02-19 수요일` 기능 구현 너무 정체되지 않게 다시 <span class="highlight branch" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">project-tracker</span> 브랜치로

생각해 보니깐, 이름이 project-tracker인데 정말 진행상황 트래킹에 필요한 기능 좀 기획하자.

1. 완전 notion-like라면 linked list로도 충분함 (풀로 안보여주잖어)
2. 달력 만들고 싶었는디. 어떤 느낌이냐 하면은 github contribution 표 같은거.

드래그했을 때 스티커가 움직이고, 드롭 시에 해당 위치에 붙는 기능 - 정말 생 vanilla js는 너무 심했다. 좌표 계산 덜덜 떨리고 최적화도 어려움.
draggable library 사용해 볼까? drop 요소에 들어가고 안 들어가고가 포인트네.
캔버스, 그리기 이런 쪽을 찾아보아야 할 것 같은데, 막상 살펴보니 원하는 방향이 아님.

추가된 스티커를 드래그 앤 드롭으로 움직이고, 안에 센터 정렬된 div 텍스트 박스가 있는 형태를 테스트 중.

고민: sticker 생성 시마다 정중앙 좌표도 constant로 보낼 수 있기는 한데, 글자 입력 시에도 중심이 고정이 되게 하는 것이 관건.
고민 2: ppt처럼 도형 내 텍스트박스의 상대 위치를 섬세 조정할 수 있는 기능? (중요도 하)
고민 3: drag 떼어냈을 때 내가 drag한 도형이 draggable이랑 닿으면 그거 적어둬서, 나중에 쭉 늘려도 node 이어지는 형태로 보여줄 수 있지 않을까?
고민 4: 기록한 메모 및 도형 이름, 위치 등 localStorage에 저장(우선 서버 없이도 새로고침 시에 갱신 안되는 것부터) > 서버에 저장() (중요도 상!)

- 어떻게 현재 스티커 위치 및 내용을 '스냅샷'으로 찍을지 고민:
  Object 하나로 묶을까? {
  recordedAt: "2025-02-19T10:34:50Z",
  stickers: [
  {memo: "여기에 입력", containerId: "0", imgSrc: "sticker00.svg", styleLeftPx: 123, styleTopPx: 56},
  {memo: "여기에 입력", containerId: "1", imgSrc: "sticker01.svg", styleLeftPx: 123, styleTopPx: 56},
  {memo: "여기에 입력", containerId: "2", imgSrc: "sticker02.svg", styleLeftPx: 123, styleTopPx: 56}
  ]
  }

- 서버비 줄이는 택배묶음 종류
  a. Batch Update: 일정 시간이나 특정 조건이 충족될 때까지 모았다가 한 번에 서버로 전송하는 방식. 서버 부하와 네트워크 비용을 줄일 때 유용
  b. Debouncing: 사용자가 멈출 때까지 기다렸다가 서버에 업데이트 전송
  c. Throttling: 일정 시간 간격으로만 서버에 전송(예: 2초에 한 번).

- 그러면 가장 구현하기 쉬운 MVP는, 저장 버튼 눌렀을 때에만 스냅샷을 서버에 한 번 보내는 방식이겠군!

고민 5: 서버를 개인 정보 저장에 쓰려면 비밀번호 암호화가 필요하지 않아?

고민 6: ppt처럼 svg 리사이징, 변형? (중요도 하)

고민 7: 더 커지면 snapshots들을 500개 정도 localStorage에 저장해놓고 뒤로가기, 되돌리기 기능도 구현 가능하겠네!

## ⚡ 바로 할 일!

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)">sticker.html에서 더블 클릭 시 text 상자 추가하는 기능?</span>

## 🛣️ 그 다음 목표?

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)"> 찍어낸 Object를 불러와, DOM에 올려 html 반영하기</span>

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)"> 쿠키 같은 것 이용해 파일 트리 구조 업데이트 최소화</span>

- 유저 읽기 전용: 쿠키 받아와서, 버전 업데이트 있음 - 서버에서 정보 불러와 갱신
- 버전 업데이트 없음, 쿠키 없음 - 갱신
- 버전 업데이트 없음, 쿠키 있음 - 업데이트하지 않음으로 고물가 시대에 몇 바이트 단수 절약하기 (의미가 있을지?)

<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)"> 종료 목표일</span> 한 달이면 충분하겠지? `2025-03-14`
