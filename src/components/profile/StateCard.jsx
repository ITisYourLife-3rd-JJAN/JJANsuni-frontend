import React from 'react';
import './stateCard.css';

const StateCard = () => {
    return (
        <div className='state-container'>
            <div className='present-state'>
                <p>현재 단계 : 2-3</p>
            </div>
            <div className='present-state'>
                <p>보유 금액 : 80,000</p>
            </div>
        </div>
    );
};

export default StateCard;