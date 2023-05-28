import {React, useState, useEffect} from 'react';
import './famCard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FamCard = ({isParent}) => {
    const [isGirl, setIsGirl] = useState(true);
    const [userAccount, setUserAccount] = useState("");
    let imgSrc = '';
    const userId = sessionStorage.getItem("userId");

    useEffect(() => {
        if (sessionStorage.getItem('gender') === 'M') {
          setIsGirl(false);
        }
      }, []);

    if (isParent === true && isGirl === true) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/mammy.png`;
    } else if (isParent !== true && isGirl === true) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/girl.png`;
    } else if (isParent === true && isGirl !== true) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/daddy.png`;
    } else {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/boy.png`;
    }

    const getUser = () => {
        axios
            .get(`http://localhost:8080/api/v1/users/${userId}`)
            .then((response) => {
                console.log(response.data.data)
                setUserAccount(response.data.data.account)
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        };
    
        useEffect(() => {
          getUser();
        }, []);

    return (
        <li className='fam-profile-card-container'>
        <img src={`${imgSrc}`} alt='' className='fam-profile' />
        <div className='fam-info-box'>
            <p id='fam-name'>{sessionStorage.getItem("username")}</p>
            <p>계좌번호: {userAccount}</p>
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
                <Link to="/message"> <p>응원메세지</p></Link>
            </>
            )}
        </div>
        </li>
    );
    };

export default FamCard;