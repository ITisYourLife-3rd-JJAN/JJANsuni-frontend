import { React, useState, useEffect } from 'react';
import FamCard from './FamCard';
import './famCardList.css';
import axios from 'axios';

const FamCardList = ({ isParent }) => {
    const [famCards, setFamCards] = useState([]); // FamCard 배열을 저장할 상태 변수를 추가합니다.
    const userId = sessionStorage.getItem('userId');

    const getFamily = () => {
        axios.get(`http://localhost:8080/api/v1/users/family-list/${userId}`)
          .then((response) => {
            console.log(response.data.data);
            setFamCards(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    useEffect ( () => {
          getFamily();
    }, [])

    return (

       <ul className="famCard-list">
        {   
                famCards && Object.values(famCards).map(famCard => (
                    <FamCard 
                        key={famCard.userId}
                        famUserId = {famCard.userId}
                         />
                ))
            }
      </ul>

    );

};

export default FamCardList;