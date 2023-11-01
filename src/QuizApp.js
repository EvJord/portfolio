import { useState } from 'react'
import './styles/quizapp.css'
import questions from "./questions.json" ;

export default function QuizApp() {

    const [showResult, setShowResult] = useState(false);
    const [points, setPoints] = useState(0);
    const [activeQuestion, setActiveQuestion] = useState(0);

    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setPoints(points + 1);
        } 
        if(activeQuestion + 1 < questions.length) {
            setActiveQuestion(activeQuestion + 1);
        } else {
            setShowResult(true);
        }
    };
    const restartQuiz = () => {
        setPoints(0);
        setActiveQuestion(0);
        setShowResult(false);

    };
     
    return (
        <div className="quiz-wrapper">
            <h1>Das alkoholfreie Pub-Quiz</h1>
            <div className='points-of'>Quiz-Punkte: <span style={{fontWeight: 'bold'}}>{points}</span> von <span style={{fontWeight: 'bold'}}>{questions.length}</span></div>
            <div className='points-of'>Frage {activeQuestion + 1} von {questions.length}</div>
            {showResult ? 
                (
                    <div className='card-wrapper'>
                        <div className='result-card'>
                            <h1>{(points < 2) ? "Übung macht den Meister 🤓"
                                 : "🎉 Glückwunsch! 🎉"} 
                            </h1>
                            <h3>{(points/questions.length) * 100}% der Fragen hast du richtig beantwortet.</h3>
                            <h3>Hat es Spaß gemacht?</h3>
                            <button onClick={() => restartQuiz()}>Erneut spielen</button>
                        </div>
                    </div>
                ) : (
                    <div className='card-wrapper'>
                        <div className='questions-card'>
                            <h3>{questions[activeQuestion].text}</h3>  
                            <ul>
                                {questions[activeQuestion].options.map((option) => {
                                return ( 
                                        <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )
} 