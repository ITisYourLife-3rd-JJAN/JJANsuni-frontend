import { React, useState, useEffect } from 'react';
import './stateCard.css';
import Loading from '../../lib/Loading';
import axios from 'axios';
import { markThousand } from '../../lib/markThousand';

const StateCard = () => {
    const userId = sessionStorage.getItem("userId");
    const [isLoading, setIsLoading] = useState(false);
    const [userBalance, setUserBalance] = useState("");
    const [userAchieve, setUserAchieve] = useState("");

    const getUser = () => {
        setIsLoading(true)
        axios
            .get(`http://localhost:8080/api/v1/users/${userId}`)
            .then((response) => {
                console.log(response.data.data)
                setUserBalance(markThousand(response.data.data.balance));
                setUserAchieve(response.data.data.achieve)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        };

        useEffect(() => {
          getUser();
        }, []);

        const checkLevel = (num) => {
            var mapNum = Math.ceil(num / 7);
            if(mapNum == 0 ) mapNum = 1;
            var missionNum = num % 7 + 1;
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
                <p>보유 금액 : {userBalance}원</p>
            </div>
        </div>
    );
};

export default StateCard;