import React from 'react';
import './famCard.css';

const FamCard = () => {
    return (
        <li className='fam-profile-card-container'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/suni.png`}
                alt=''
                className='fam-profile' />
            <div className='fam-info-box'>
                <p id='fam-name'> 정길연 </p>
                <p> 좋아하는 것 : 게임 강아지 </p>
                <p> 꿈 : 연예인 </p>
                <p> 계좌번호 : 882-602-04182779 </p>
            </div>
            <div className='fam-edit-box'>
                <p> 탈퇴하기 </p>
                <p> 회원정보수정 </p>
            </div>
        </li>
        
    );
};

export default FamCard;