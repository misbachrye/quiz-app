import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import styles from "./App.module.css";
import QuizHandler from "./hooks/QuizHandler";
import { QUESTIONS } from "./data/questions";

function App() {
  const {
    finish,
    score,
    FinishHandler,
    RepeatHandler,
    current,
    HandleNext,
    HandlePrev,
    ChooseHandler,
    AnswerHandler,
    answers,
  } = QuizHandler();

  return (
    <div className={styles.quizContainer}>
      {finish ? (
        <ResultScreen
          correctQuestionNumber={score.filter((n) => n !== 0).length}
          totalQuestion={QUESTIONS.length}
          resultScore={FinishHandler}
          repeatQuizHandler={RepeatHandler}
        />
      ) : (
        <QuestionCard
          currentQuestionNumber={current + 1}
          question={QUESTIONS[current]}
          totalQuestion={QUESTIONS.length}
          nextHandler={HandleNext}
          prevHandler={HandlePrev}
          chooseHandler={ChooseHandler}
          finishHandler={FinishHandler}
          answerHandler={AnswerHandler}
          answers={answers}
        />
      )}
    </div>
  );
}

export default App;
