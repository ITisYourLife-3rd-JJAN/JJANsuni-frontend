import React from 'react';
import './myBigCard.css';

const MyBigCard = () => {
    return (
        <div className='my-profile-card-container'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/suni.png`}
                alt=''
                className='me-profile' />
            <div className='my-info-box'>
                <p id='my-name'> 정길연 </p>
                <p> 좋아하는 것 : 게임 강아지 </p>
                <p> 꿈 : 연예인 </p>
                <p> 계좌번호 : 882-602-04182779 </p>
            </div>
            <div className='my-edit-box'>
                <p> 탈퇴하기 </p>
                <p> 회원정보수정 </p>
            </div>
        </div>
    );
};

export default MyBigCard;