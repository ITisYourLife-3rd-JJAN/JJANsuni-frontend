import {React, useState, useEffect} from 'react';
import './famCard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../lib/Loading';

    const FamCard = ({famUserId}) => {
        const [isGirl, setIsGirl] = useState();
        const [userId, setUserId] = useState("");
        const [userName, setUserName] = useState("");
        const [userAccount, setUserAccount] = useState("");
        const [userGender, setUserGender] = useState("");
        const [userAchieve, setUserAcieve] = useState("");
        const [isParent, setIsParent] = useState("");
        const [isLoading, setIsLoading] = useState(true)
    
        let imgSrc = '';

    const getUser = () => {
        axios
            .get(
                `http://localhost:8080/api/v1/users/${userId}`
            )
            .then((response) => {
                console.log(response.data.data);
                setIsParent(response.data.data.isParent === "T" ? true : false)
                setUserName(response.data.data.name);
                setUserAccount(response.data.data.account);
                setUserGender(response.data.data.gender);
                setUserAcieve(response.data.data.achieve);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
      };

      useEffect(() => {
        getUser();
        userGender == "F" ? setIsGirl(true) : setIsGirl(false)
    }, [userId, userGender])

    useEffect(() => {
        setUserId(famUserId);
    }, [])

    if (isLoading) {
        return <Loading/>;
    }

    if (isParent && isGirl) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/mammy.png`;
    } else if (!isParent && isGirl) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/girl.png`;
    } else if (isParent && !isGirl) {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/daddy.png`;
    } else {
        imgSrc = `${process.env.PUBLIC_URL}/assets/images/boy.png`;
    }

    const checkLevel = (userAchieve) => {
        var mapNum = Math.ceil(userAchieve / 7);
        var missionNum = userAchieve % 8;
        return `${mapNum}-${missionNum}` 
    }

    return (
       <>
        {userId && (
            <li className='fam-profile-card-container'>
                <img src={`${imgSrc}`} alt='' className='fam-profile' />
                <div className='fam-info-box'>
                    <p id='fam-name'>{userName}</p>
                    <p>계좌번호 : {userAccount}</p>
                    {(!isParent) && 
                        <p>현재단계 : {checkLevel(userAchieve)}</p>
                    }
                </div>
                <div className='fam-edit-box'>
                    {isParent ? (
                    <>
                        <Link to="/debit"><p>송금하기</p></Link>
                        <Link to="/debit-history"><p>이체내역</p></Link>
                    </>
                    ) : (
                    <>
                        <Link to="/debit"><p>송금하기</p></Link>
                        <Link to="/direct-debit"><p>자동이체</p></Link>
                        <Link to="/message"> <p>응원메세지</p></Link>
                    </>
                    )}
                </div>
            </li>
            )
        }
       </>
    );
    };

export default FamCard;