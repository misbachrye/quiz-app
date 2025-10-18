import styles from "./ResultScreen.module.css";

function ResultScreen({
  correctQuestionNumber,
  totalQuestion,
  resultScore,
  repeatQuizHandler,
}) {
  return (
    <div className={styles.resultContainer}>
      <h1>Kuis Selesai</h1>
      <p className={styles.resultInfo}>
        Jumlah Benar:{" "}
        <span className={styles.correctNumber}>{correctQuestionNumber}</span> /{" "}
        {totalQuestion}
      </p>
      <h2 className={styles.scoreInfo}>
        Skor Akhir Anda: <span> {resultScore()} </span>
      </h2>
      <button className={styles.button} onClick={repeatQuizHandler}>
        Ulangi Kuis
      </button>
    </div>
  );
}

export default ResultScreen;
