import logo from "./logo.svg";
import "./App.css";
import {
  API_URI,
  POPULATE,
  GET_CURRENT_QUESTION,
  SHUFFLE_ANSWER,
  INDEX_INCREMENT,
  FETCH_OPTIONS,
  POINTS_ON_CORRECT,
  RESTART_GAME,
  TIMEOUT,
  DELAY,
  TIME_LIMIT_SECONDS,
  TIME_LIMIT_MINUTES,
} from "./constants.js";
import { useReducer, useDispatch } from "react-redux";
import quizReducer, {
  intialState,
  quizSlider,
  reducer,
} from "./reducers/reducer.js";
import { useState, useReducer, useEffect, useRef } from "react";
function App() {
  return (
    <div className="App">
      <QuizContainer />
    </div>
  );
}

function QuizContainer() {
  const [triesLeft, setTriesLeft] = useState(5);
  const [fetchChecker, setFetchChecker] = useState(true);
  const [points, setPoints] = useState(0);

  const [
    { questions, ready, index, question, shuffledAnswers, restart, isTimeout },
    dispatch,
  ] = useReducer(quizReducer, intialState);
  const controller = useRef(null);

  const shuffle = () => {
    if (!question) return;

    let questionsLength = question.incorrect_answers.length;
    const min = 0;
    const max = question.incorrect_answers.length;
    let answers = [...question.incorrect_answers, question.correct_answer];
    while (questionsLength > 0) {
      let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
      questionsLength--;
      [answers[questionsLength], answers[randomIndex]] = [
        answers[randomIndex],
        answers[questionsLength],
      ];
    }
    return answers;
  };

  function wait(t) {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  const fetchApi = (uri, delay, fetchOptions) => {
    function onError(err) {
      setTriesLeft((triesLeft) => triesLeft - 1);
      if (!triesLeft) {
        throw err;
      }

      return wait(delay).then(() => {
        setFetchChecker((fetchChecker) => !fetchChecker);
      });
    }
    const data = fetch(uri, fetchOptions)
      .then(async (response) => {
        if (response.status === 429) {
          onError(response.status);
        }
        const data = await response.json();
        return data.results;
      })
      .catch(onError);
    return data;
  };

  const nextQuestion = () => {
    dispatch({ type: INDEX_INCREMENT });
  };

  useEffect(() => {
    if (controller.current !== null) return controller.current.abort();
    console.log("Ran this");
    controller.current = new AbortController();
    const data = fetchApi(API_URI, DELAY, FETCH_OPTIONS).then((result) => {
      if (result === undefined) return;
      dispatch({ type: POPULATE, payload: result });
      controller.current = null;
    });
  }, [restart, dispatch]);

  useEffect(() => {
    console.log(questions);
    if (questions.length === 0) return;
    dispatch({ type: INDEX_INCREMENT });
  }, [questions, dispatch]);

  useEffect(() => {
    if (index <= -1) return;
    dispatch({ type: GET_CURRENT_QUESTION });
  }, [index, dispatch]);

  useEffect(() => {
    if (!question) return;
    const answers = shuffle();
    dispatch({ type: SHUFFLE_ANSWER, payload: answers });
  }, [question, dispatch]);

  return (
    <section className="react-quiz-container">
      <QuizHeader />
      <div className="quiz-container">
        <ProgressBarContainer>
          <ProgressBar
            totalQuestions={questions.length}
            totalQuestionsAnswered={index}
          />
          <ProgressBarContainerFooter
            totalQuestions={questions.length}
            totalQuestionsAnswered={index}
            points={points}
          />
        </ProgressBarContainer>
        <QuizBody>
          {ready === false && <p>Loading...</p>}
          {ready === true && question && (
            <Quiz
              question={question}
              onAddPoints={() =>
                setPoints((points) => points + POINTS_ON_CORRECT)
              }
              answers={shuffledAnswers}
            ></Quiz>
          )}
        </QuizBody>
        <QuizFooter>
          <Timer isTimeout={isTimeout} restart={restart} />
          <Button context="Next" onClick={() => nextQuestion()} />
        </QuizFooter>
      </div>

      <Modal>
        <Label context="Time is out!" classname="modal-text"></Label>
        <Button
          classname="restart-button"
          onClick={() => dispatch({ type: RESTART_GAME })}
          context="Restart"
        ></Button>
      </Modal>
    </section>
  );
}
function Modal({ children, classname }) {
  const [{ isTimeout }, dispatch] = useReducer(quizReducer, intialState);
  console.log(isTimeout);
  return (
    <div className={`modal-parent ${classname}`}>
      {isTimeout && { children }}
    </div>
  );
}
function ProgressBarContainerFooter({
  totalQuestions,
  totalQuestionsAnswered,
  points,
}) {
  const questionsAnswered =
    totalQuestionsAnswered === -1 ? 0 : totalQuestionsAnswered + 1;
  return (
    <div className="progress-bar-container-footer">
      <Label
        context={`Question ${questionsAnswered}/${totalQuestions}`}
      ></Label>
      <Label context={`${points}/${totalQuestions * 15} points`}></Label>
    </div>
  );
}

function QuizHeader() {
  return (
    <header className="quiz-header">
      <img src="./logo192.png"></img>
      <h1>The React Quiz</h1>
    </header>
  );
}

function ProgressBarContainer({ children }) {
  return <div className="progress-bar-container">{children}</div>;
}
function Label({ context, classname }) {
  return <label className={`label ${classname}`}>{context}</label>;
}
function ProgressBar({ totalQuestions, totalQuestionsAnswered }) {
  return (
    <progress
      value={totalQuestionsAnswered + 1}
      max={totalQuestions}
      className="progress-bar"
    ></progress>
  );
}
function QuizBody({ children }) {
  return <div className="quiz-body">{children}</div>;
}

function QuizFooter({ children }) {
  return <div className="quiz-footer">{children}</div>;
}
function Button({ onClick, context, classname }) {
  return (
    <div className={`button ${classname}`} onClick={onClick}>
      {context}
    </div>
  );
}
function Timer({ onTimeout, isTimeout, restart }) {
  const [minutes, setMinutes] = useState(TIME_LIMIT_MINUTES);
  const [seconds, setSeconds] = useState(TIME_LIMIT_SECONDS);
  const [{}, dispatch] = useReducer(quizReducer, intialState);
  useEffect(() => {
    if (seconds <= 0 && minutes <= 0) {
      if (isTimeout === true) return;
      dispatch({ type: TIMEOUT });

      return;
    }
    let interval;
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else if (minutes > 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (restart === true) {
      setMinutes(TIME_LIMIT_MINUTES);
      setSeconds(TIME_LIMIT_SECONDS);
    }
  }, [restart]);
  return (
    <div className="timer">
      <label>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </label>
    </div>
  );
}
function Quiz({ question, answers, onAddPoints }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const handleAnswered = (answer) => {
    setIsAnswered(true);
    if (question.correct_answer === answer) {
      onAddPoints();
    }
  };

  const resetAnswer = () => {
    setIsAnswered(false);
  };

  return (
    <>
      <p className="quiz-body-title">{question.question}</p>
      {answers.map((answer) => (
        <Answer
          onAnswered={(answer) => handleAnswered(answer)}
          answer={answer}
          isAnswered={isAnswered}
          onResetAnswer={() => resetAnswer()}
          correctAnswer={question.correct_answer}
          key={answer}
        ></Answer>
      ))}
    </>
  );
}
function Answer({
  answer,
  correctAnswer,
  isAnswered,
  onResetAnswer,
  onAnswered,
}) {
  const HOVERED = "hovered";
  const CLICKED = "clicked";
  const LEAVE = "leave";
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState({});
  const isCorrectAnswer = answer === correctAnswer;

  const correctStyle = {
    backgroundColor: "var(--color-theme)",
    color: "var(--color-light)",
  };
  const incorrectStyle = {
    backgroundColor: "var(--color-accent)",
    color: "var(--color-hovered)",
  };
  const hoveredStyle = {
    backgroundColor: "var(--color-hovered)",
    transform: "translateX(20px)",
  };

  const onHandleAnswered = () => {
    onAnswered(answer);
  };

  useEffect(() => {
    if (isHovered === true && isAnswered === false) setStyle(hoveredStyle);
    if (isHovered === false && isAnswered === false)
      setStyle((style) => {
        return {};
      });

    if (isAnswered === false) return;
    if (isCorrectAnswer === true)
      setStyle((style) => {
        return { ...correctStyle, transform: style.transform };
      });
    else
      setStyle((style) => {
        return { ...incorrectStyle, transform: style.transform };
      });
  }, [isAnswered, isHovered]);

  useEffect(() => {
    setStyle(() => {
      return {};
    });
    setIsHovered(false);
    onResetAnswer();
  }, [answer]);

  return (
    <div
      style={style}
      onClick={(e) => onHandleAnswered()}
      onMouseEnter={() => {
        setIsHovered(() => {
          return true;
        });
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="answer"
    >
      <label>{answer}</label>
    </div>
  );
}

export default App;
