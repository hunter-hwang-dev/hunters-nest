# 🏛️ git init 이후의 변천사 ⏳

## 👎 기능 구현 미흡

### ⚠️ <span class="highlight yellow" style="border-radius: 8px; padding: 2px 8px 4px 8px; background-color: rgba(255, 192, 55, 0.32)">탭 비활성화 시 favicon 바꾸기 어렵다</span>

<div class="indent" style="padding: 0 0 0 30px">
예컨대, 유튜브에서 탭이 비활성화 되어있는데도 영상 재생시키면 낭비겠지? 이런 상황에서 탭의 활성화 여부를 체크하는 방법이 있다.

- Window.onfocus and Window.onblur (레거시, 현재 비추)
- The page Visibility API (2019년 부로 전 브라우저에서 지원됨)

그러나 위 방법을 여러 번 써보아도, 탭 전환시 브라우저 기본 favicon이 되는 오류가 발생했다. 정확한 원인은 깊은 공부가 필요할 것 같아 이렇게만 우선 기록한다.

</div>
