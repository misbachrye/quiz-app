import { useState } from "react";
import { QUESTIONS } from "../data/questions";

function QuizHandler() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState([]);
    const [finish, setFinish] = useState(false);
    const [answers, setAnswers] = useState([]);

    function HandleNext() {
        if (score[current] !== undefined) {
            current == QUESTIONS.length - 1
                ? setCurrent(current)
                : setCurrent((current) => current + 1);
            // alert("score anda di soal sebelumnya adalah " + score[current])
            if (current == QUESTIONS.length - 1) {
                alert(score);
            }
        } else {
            alert("soal wajib dijawab");
        }
    }

    function HandlePrev() {
        current == 0 ? setCurrent(0) : setCurrent((current) => current - 1);
    }

    function ChooseHandler(isCorrect, point) {
        setScore((prevScore) => {
            const currentScore = [...prevScore];
            currentScore[current] = isCorrect ? point : 0;
            return currentScore;
        });
    }

    function FinishHandler() {
        if (score[current] !== undefined) {
            setFinish(true);
            return score.reduce((jumlah, nilai) => jumlah + nilai, 0);
        } else {
            alert("soal wajib dijawab");
        }
    }

    function AnswerHandler(indexOption) {
        setAnswers((prevAnswer) => {
            const currentAnswer = [...prevAnswer];
            currentAnswer[current] = indexOption;
            return currentAnswer;
        });
    }

    function RepeatHandler() {
        const yakin = confirm("Anda yakin ingin mengulangi kuis?");

        if (yakin) {
            alert("Kuis diulang!");
            setFinish(false);
            setCurrent(0);
            setScore([]);
            setAnswers([]);
        } else {
            alert("Kuis dibatalkan.");
        }
    }

    return {
        finish,
        answers,
        score,
        current,
        HandleNext,
        HandlePrev,
        ChooseHandler,
        FinishHandler,
        AnswerHandler,
        RepeatHandler
    }
}

export default QuizHandler;