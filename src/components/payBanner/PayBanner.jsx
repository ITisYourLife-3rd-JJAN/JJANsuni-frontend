import React, {useEffect, useState} from 'react';
import './payBanner.css'
import axios from 'axios';
import { markThousand } from '../../lib/markThousand.js'
import { checkFinalSound } from '../../lib/checkFinalSound'

const PayBanner = ({ isCreated, qrDiv }) => {
    const userId = sessionStorage.getItem("userId")
    const name = sessionStorage.getItem("username");
    const [balance, setBalance] = useState(0);

    useEffect (() => {
        axios
            .get(`http://localhost:8080/api/v1/users/${userId}`)
            .then((response) => {
                setBalance(response.data.data.balance);
            })
            .catch((error) => {
                console.log(error)
            })
            
    },[])

    const getEnding = (text) => {
        const lastTwoChars = text.slice(-2); 
        
        if(checkFinalSound(text)) return `${lastTwoChars}의`;
        else return `${lastTwoChars}이의`;
      };

    return (
        <div className='payBanner'>
            <div className='paybannerdiv'>
                <img  src={`${process.env.PUBLIC_URL}/assets/images/credit.png`} alt="" width={50}/>
                짠페이!
            </div>
            <div className='kidBalance'>
                <div> {getEnding(name)} 현재 잔액: </div>
                <div> {markThousand(balance)} 원</div>
            </div>
            <div onClick={qrDiv} className='paybannerdiv'>
                {isCreated ? '짠페이 생성완료' : '짠페이 생성하기'}
            </div>
        </div>
    );
};

export default PayBanner;