import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './quiz.css'

const Quiz = ({missionPk, mapNum, missionNum, title, explain, answer }) => {
    const navigate = useNavigate();

    const handleAnswerClick = (isO) => {
        navigate(`/kid/solution/${missionPk}`, { state: { isO, explain, mapNum, missionNum, answer , title} });
    };

    return (
        <div className='quiz-container'>
            <div className='quiz-title'>
                <p>Q. {title}</p>
            </div>
            <div className='quiz-selectBox'>
                <div className='answer-container'>
                    <div className='answer-box'  onClick={() => handleAnswerClick(true)}>
                        <p>O</p>
                    </div>
                </div>
                <div className='answer-container'>
                    <div className='answer-box' onClick={() => handleAnswerClick(false)}>
                        <p>X</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;