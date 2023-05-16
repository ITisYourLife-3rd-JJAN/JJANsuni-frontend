import React, {useState} from 'react';
import './payBanner.css'


const PayBanner = ({ isCreated, qrDiv }) => {

    return (
        <div className='payBanner'>
            <div className='paybannerdiv'>
                <img  src={`${process.env.PUBLIC_URL}/assets/images/credit.png`} alt="" width={50}/>
                짠페이!
            </div>
            <div className='kidBalance'>
                <div>아이 현재 잔액:</div>
                <div>찌글이 원</div>
            </div>
            <div onClick={qrDiv} className='paybannerdiv'>
                {isCreated ? '짠페이 생성하기' : '짠페이 생성하기'}
            </div>
        </div>
    );
};

export default PayBanner;