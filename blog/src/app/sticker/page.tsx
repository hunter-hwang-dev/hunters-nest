import styles from "./sticker.module.css";
export default function Page() {
  return (
    <div className={styles.sketch}>
      <button id="save" className={styles.btn}>
        이 스케치 저장하기
      </button>
      <button id="load" className={styles.btn}>
        더미 데이터 불러오기
      </button>
      <button id="bin" className={styles.btn}>
        여기로 드래그 앤 드롭해 버려 주세요!
      </button>

      <div id="canvas"></div>
    </div>
  );
}
