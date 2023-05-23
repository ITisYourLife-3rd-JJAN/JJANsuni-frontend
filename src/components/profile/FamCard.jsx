import {React, useState} from 'react';
import './famCard.css';

const FamCard = ({isParent}) => {
    const [isGirl, setIsGirl] = useState(false);
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
        <li className='fam-profile-card-container'>
        <img src={`${imgSrc}`} alt='' className='fam-profile' />
        <div className='fam-info-box'>
            <p id='fam-name'>노승욱</p>
            <p>계좌번호: 882-655-1432779</p>
        </div>
        <div className='fam-edit-box'>
            {!isParent ? (
            <>
                <p>송금하기</p>
                <p>이체내역</p>
            </>
            ) : (
            <>
                <p>송금하기</p>
                <p>자동이체</p>
                <p>응원메세지</p>
            </>
            )}
        </div>
        </li>
    );
    };

export default FamCard;
