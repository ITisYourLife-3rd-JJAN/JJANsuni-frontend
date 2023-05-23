import React from 'react';
import './famCard.css';

const FamCard = ({isParent}) => {
    return (
        <li className='fam-profile-card-container'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/daddy.png`}
                alt=''
                className='fam-profile' />
            <div className='fam-info-box'>
                <p id='fam-name'> 노승욱 </p>
                <p> 계좌번호 : 882-655-1432779 </p>
            </div>
            <div className='fam-edit-box'>
                {!isParent ? (
                    <>
                        <p> 송금하기 </p>
                        <p> 이체내역 </p> 
                    </>
                ) : (
                    <>
                        <p> 송금하기 </p>
                        <p> 자동이체 </p> 
                        <p> 응원메세지 </p> 
                    </>
                )}

            </div>
        </li>
        
    );
};

export default FamCard;