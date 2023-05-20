import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './quiz.css'

const Quiz = ({missionId, mapNum, missionNum, title, explain, answer }) => {
    const navigate = useNavigate();

    const handleAnswerClick = (isO) => {
        navigate(`/kid/solution/${missionId}`, { state: { isO, explain, mapNum, missionNum, answer } });
    };

    return (
        <div className='quiz-container'>
            <div className='quiz-title'>
                <p>Q. {title}</p>
            </div>
            <div className='quiz-selectBox'>
                <div className='answer-container'>
                    <div className='answer-box'>
                        <p onClick={() => handleAnswerClick(true)}>O</p>
                    </div>
                </div>
                <div className='answer-container'>
                    <div className='answer-box'>
                        <p onClick={() => handleAnswerClick(false)}>X</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;