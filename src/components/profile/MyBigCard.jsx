import {React, useState} from 'react';
import './myBigCard.css';

const MyBigCard = ({isParent}) => {

    const containerStyle = {
        backgroundColor: isParent ? '#FCFF5C' : '#CDFF5C'
    };

    const [isGirl, setIsGirl] = useState(true);
    let imgSrc = '';

    if (isParent === true && isGirl === true) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/mammy.png`;
    } else if (isParent !== true && isGirl === true) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/girl.png`;
    } else if (isParent === true && isGirl !== true) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/daddy.png`;
    } else {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/boy.png`;
    }

    return (
        <div className='my-profile-card-container' style={containerStyle}>
            <img
                src={`${imgSrc}`}
                alt=''
                className='me-profile' />
            <div className='my-info-box'>
                <p id='my-name'>정길연</p>
                {!isParent ? (
                    <>
                        <p id='my-favorite'>좋아하는 것: 게임 강아지</p>
                        <p id='my-dream'>꿈: 연예인</p>
                    </>
                ) : (
                    <>
                        <p id='my-balance'>잔액: 10000원</p>
                    </>
                )}
                <p id='my-account'>계좌번호: 882-602-04182779</p>
                <p>strongfox@gmail.com</p>
            </div>
            <div className='my-edit-box'>
                <p>탈퇴하기</p>
                <p>회원정보수정</p>
                {!isParent ? (
                    <></>
                ) : (
                    <>
                        <p>짠페이 충전하기</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyBigCard;