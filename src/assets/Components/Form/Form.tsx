import React, { useState, useEffect } from 'react'
import './Form.css';
import LanguageSwitch from '../SwitchLanguage/LanguageSwitch';
import ItaData from '../Data/ItaData';
import EngData from '../Data/EngData';
import { Link } from 'react-router-dom';
import { useScore } from '../ScoreContext/ScoreContext';

interface Answer {
    [questionIndex: number]: string;
  }

const Form: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Answer>({});
    const { score, setScore, setFinalScore } = useScore();
    const [currentLanguage, setCurrentLanguage] = useState('it');

    const questions = currentLanguage === 'it' ? ItaData : EngData;
    const currentQuestionData = questions[currentQuestion];
    const totalQuestions = questions.length;
    const progress = (currentQuestion / totalQuestions) * 100;

    const handleOptionSelect = (option: string) => {
        setAnswers({ ...answers, [currentQuestion]: option });
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            const prevAnswer = answers[currentQuestion -1];
            const isPrevAnswerCorrect = prevAnswer === questions[currentQuestion - 1].correctOption;
            setCurrentQuestion(currentQuestion - 1);
            if (isPrevAnswerCorrect) {
                setScore(score - 1);
            }
        }
    };

    const handleNext = () => {
        const selectedOption = answers[currentQuestion];
        if (selectedOption) {
            const isCorrect = selectedOption === currentQuestionData.correctOption;
            if (isCorrect) {
                setScore(score + 1);
            }
            if (currentQuestion < totalQuestions - 1) {
                setCurrentQuestion(currentQuestion + 1);
            }
        }
    };

    
    const handleFinish = () => {
        const selectedOption = answers[currentQuestion];
        if (selectedOption) {
            const isCorrect = selectedOption === currentQuestionData.correctOption;
            if (isCorrect) {
                setFinalScore(score + 1);
            }
        }
        setScore(0);
    };

    useEffect(() => {
        setFinalScore(score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score]);    

    const handleChangeLanguage = (language: string) => {
        setCurrentLanguage(language);
    };

    return (
        <>
            <LanguageSwitch onChangeLanguage={handleChangeLanguage} />
            <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="form-container">
                <h2>{currentQuestionData.question}</h2>
                <div className="question-container">
                    <ul>
                        {currentQuestionData.options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionSelect(option)}>
                                <button
                                    className={answers[currentQuestion] === option ? 'answer-container selected' : 'answer-container'}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className='move-container'>
                    <button
                        onClick={handleBack}
                        disabled={currentQuestion === 0}
                        className='move'
                    >
                        {currentLanguage === 'it' ? 'Indietro' : 'Back'}
                    </button>       
                    {currentQuestion === questions.length - 1 ? (
                        <Link to="/score">
                            <button
                                onClick={handleFinish}
                                disabled={!answers[currentQuestion]}
                                className='move'
                            >
                                {currentLanguage === 'it' ? 'Fine' : 'Finish'}
                            </button>
                        </Link>
                    ) : (
                        <button
                            onClick={handleNext}
                            disabled={!answers[currentQuestion]}
                            className='move'
                        >
                            {currentLanguage === 'it' ? 'Avanti' : 'Next'}
                        </button>
                    )}
                </div>
            </div>
        </>
      );
    };
    
    export default Form;