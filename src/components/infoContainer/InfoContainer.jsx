import React from 'react';
import './infoContainer.css';

const InfoContainer = () => {
    return (
        <div className='infoContainer'>
            <div className='infoTab' >
            <img src={`${process.env.PUBLIC_URL}/assets/images/credit.png`} alt='' />
            카드내역
            </div>
            <div className='infoTab'>
            아이 현재 잔액 : 35,000원            
            </div>
            <div className='infoTab'>
            정길연 아이         
            </div>
        </div>
    );
};

export default InfoContainer;