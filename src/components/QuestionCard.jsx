import styles from "./QuestionCard.module.css";

function QuestionCard({
  totalQuestion,
  currentQuestionNumber,
  question,
  nextHandler,
  prevHandler,
  chooseHandler,
  finishHandler,
  answerHandler,
  answers,
}) {
  const selectedAnswerIndex = answers[currentQuestionNumber - 1];

  return (
    <div>
      <div className={styles.header}>
        <h1>Welcome to Quiz App</h1>
        <span className={styles.questionCounter}>
          Pertanyaan{" "}
          <span className={styles.currentNumber}>{currentQuestionNumber}</span>{" "}
          / {totalQuestion}
        </span>
      </div>
      <p className={styles.questionText}>{question.questionText}</p>
      <ul className={styles.answerList}>
        {question.answerOptions.map((answer, index) => (
          <li
            key={index}
            className={`${styles.option} ${
              index === selectedAnswerIndex ? styles.selected : ""
            }`}
            onClick={() => {
              chooseHandler(answer.isCorrect, question.point);
              answerHandler(index);
            }}
          >
            {answer.answerText}
          </li>
        ))}
      </ul>
      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={prevHandler}
          disabled={currentQuestionNumber <= 1}
        >
          Previous
        </button>
        {currentQuestionNumber === totalQuestion ? (
          <button className={styles.button} onClick={finishHandler}>
            Selesai
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => nextHandler()}
            disabled={currentQuestionNumber >= totalQuestion}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
