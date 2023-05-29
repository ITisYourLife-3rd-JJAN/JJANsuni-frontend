import { React, useState, useEffect } from 'react';
import './stateCard.css';
import Loading from '../../lib/Loading';
import axios from 'axios';

const StateCard = () => {
    const userId = sessionStorage.getItem("userId");
    const [isLoading, setIsLoading] = useState(false);
    const [userBalance, setUserBalance] = useState("");
    const [userAchieve, setUserAcieve] = useState("");

    const getUser = () => {
        setIsLoading(true)
        axios
            .get(`http://localhost:8080/api/v1/users/${userId}`)
            .then((response) => {
                console.log(response.data.data)
                setUserBalance(response.data.data.balance)
                setUserAcieve(response.data.data.achieve)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        };
    
        useEffect(() => {
          getUser();
        }, []);
      
        const checkLevel = (userAchieve) => {
            var mapNum = Math.ceil(userAchieve / 7);
            var missionNum = userAchieve % 8;
            return `${mapNum}-${missionNum}` 
        }
    
      if (isLoading) {
        return <Loading/>;
      }
    return (
        <div className='state-container'>
            <div className='present-state'>
                <p>현재 단계 : {checkLevel(userAchieve)}</p>
            </div>
            <div className='present-state'>
                <p>보유 금액 : {userBalance}</p>
            </div>
        </div>
    );
};

export default StateCard;