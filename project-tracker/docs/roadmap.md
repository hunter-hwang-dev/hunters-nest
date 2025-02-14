# 🏙️PROJECT-TRACKER ROADMAP 🪂

## 💲 정기 결제 중인 상품

<span class="highlight pink" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 245, 0.5)">Figma & FigJam</span> Monthly, `2025-02-14`, 33,024원 ($22 = $15 + $5 + 10% tax)

### 🔜 구독 취소 예정 리스트

<span class="highlight pink" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 245, 0.5)">Figma & FigJam</span> `3월 초 이전에 취소` 한 달 분량만 사용, 플랜 취소 약관 확인 후!

## 일일 목표

- 하루에 (삽질, 공부하는 시간 포함) 4시간 개발을 목표로 하되, 꼭 매일 할 필요는 없음. 주말은 쉬고, 주 4일제 정도라고 생각하기.
- 개발 외에도 매일 30분씩 운동, 삼시세끼 잘 챙겨먹기, 7시간 이상 숙면하기를 꼭 지킬 것. 건강이 우선!

## 🗺️ 왜 시작했고, 지금 어디?

<span class="highlight" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">발제</span> 개발 블로그를 처음부터 만드는 것은 부담스러워!

<span class="highlight pink" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 56, 56, 0.5)">MVP</span> 진행 상황을 간결하게 기록, 공유하는 트래커부터 만들자.

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 시작일</span> `2025-02-14`

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 첫 커밋 & 레포지토리 게시</span> `2025-02-15`

<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)"> 파일 트리 열고 닫기</span> `2025-02-15`

## ⚡ 최근 구현 사항

- `file-name` 클릭하면 아래에 숨겨져 있는 내용 보여주기

  - 하단 디렉토리를 하나의 태그로 묶어, `display: none;` 담긴 class 떼다 붙였다 `toggle`해 구현
  - 트리형 자료와 알맞는 `tag`? `ul > li` 구조
  - [하드코딩 후 범용성 고민](troubleshooting.md/#-미흡한-기능-개선): `event.target` 활용해 해결!
  - 예상 소요 시간은 `20분` 이었으나, 실제 구현까지 `1시간 20분` 가량 걸림. 다음 `바로 할 일`은 처음 떠오르는 예상 시간에 `* 6` 할 것.

<span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)"> 첫 머지</span> `2025-02-15`

## 🛣️ 다음 목표?

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)"> js 내 tree class 만들어 file tree Object찍어내기</span>

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)"> 찍어낸 Object를 불러와, DOM에 올려 html 반영하기</span>

<span class="highlight grey" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(127, 127, 127, 0.3)"> 쿠키 같은 것 이용해 파일 트리 구조 업데이트 최소화</span>

- 유저 읽기 전용: 쿠키 받아와서, 버전 업데이트 있음 - 서버에서 정보 불러와 갱신
- 버전 업데이트 없음, 쿠키 없음 - 갱신
- 버전 업데이트 없음, 쿠키 있음 - 업데이트하지 않음으로 고물가 시대에 몇 바이트 단수 절약하기 (의미가 있을지?)

<span class="highlight green" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(41, 255, 105, 0.3)"> 종료 목표일</span> 한 달이면 충분하겠지? `2025-03-14`
