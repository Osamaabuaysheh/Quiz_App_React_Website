import { useCallback, useState } from "react";
import "./App.css";
import axios from "axios";
import CircleProgressBar from "./components/CircleProgressBar/circle_progress_bar";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const fetchQuizData = useCallback(async () => {
    let resopnse = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
    );
    try {
      var data = resopnse.data.results.map((question: any): string => {
        return question;
      });
      console.log(data);
      setQuestions(data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  // fetchQuizData();

  return (
    <div className="App">
      <header>
        <h1>Typescript Quiz</h1>
      </header>
      <CircleProgressBar />

      <div className="glass-container">
        <div className="content">
          <h2>Qustion #</h2>

          <div className="container">
            {/* {questions.map((question: any) => {
              return <h2>{question[currentQuestion].question}</h2>;
            })} */}

            <ul>
              <li>
                <input type="radio" id="a-option" name="selector" />
                <label htmlFor="a-option">Answer 1</label>

                <div className="check"></div>
              </li>

              <li>
                <input type="radio" id="b-option" name="selector" />
                <label htmlFor="b-option">Answer 2</label>

                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>

              <li>
                <input type="radio" id="c-option" name="selector" />
                <label htmlFor="c-option">Answer 3</label>

                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>
              <li>
                <input type="radio" id="d-option" name="selector" />
                <label htmlFor="d-option">Answer 4</label>

                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
