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

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 첫 머지</span>

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

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 2번째 머지</span>

#### `2025-02-16 일요일` 휴식!

#### `2025-02-17 월요일` 까먹지 않게 살짝 들여다 볼 것.

#### `2025-02-17 화요일` 자잘한 기능 구현 최소 3개, 최대 7개 목표

## ⚡ 바로 할 일!

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)">2025-02-15 11:05:14 아휴 오늘은 이제 좀 쉬자.</span> (예상 소요: )

## 🛣️ 그 다음 목표?

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)"> 찍어낸 Object를 불러와, DOM에 올려 html 반영하기</span>

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)"> 쿠키 같은 것 이용해 파일 트리 구조 업데이트 최소화</span>

- 유저 읽기 전용: 쿠키 받아와서, 버전 업데이트 있음 - 서버에서 정보 불러와 갱신
- 버전 업데이트 없음, 쿠키 없음 - 갱신
- 버전 업데이트 없음, 쿠키 있음 - 업데이트하지 않음으로 고물가 시대에 몇 바이트 단수 절약하기 (의미가 있을지?)

<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)"> 종료 목표일</span> 한 달이면 충분하겠지? `2025-03-14`
