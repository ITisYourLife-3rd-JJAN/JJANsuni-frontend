import React from 'react';
import { useNavigate } from 'react-router-dom';
import './quiz.css'

const Quiz = ({missionId}) => {
    const navigate = useNavigate();

    return (
        <div className='quiz-container'>
            <div className='quiz-title'>
                <p>Q. 지역금융안전망(RFAs)는 지리적으로 먼 국가들이 외환보유액 등을 통해 재원을 조성하여 금융, 외환위기에 대응하는 체제이다.</p>
            </div>
            <div className='quiz-selectBox'>
                <div className='answer-container'>
                    <div className='answer-box'>
                        <p onClick={() => navigate(`/kid/solution/${missionId}`)}>O</p>
                    </div>
                </div>
                <div className='answer-container'>
                    <div className='answer-box'>
                        <p>X</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;