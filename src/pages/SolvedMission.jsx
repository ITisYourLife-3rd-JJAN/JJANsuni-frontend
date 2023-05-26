import { React, useState, useEffect } from 'react';
import MapBackground from '../components/Mission/MapBackground';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './css/solvedMission.css'
import axios from 'axios';
import confetti from "https://esm.run/canvas-confetti@1";
import Header from '../components/header/Header';
import Loading from '../lib/Loading';

const SolvedMission = () => {
    const { missionId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const answer = location.state.answer;
    const explain = location.state.explain.replace(/\n/g, '<br>');
    const mapNum = location.state.mapNum;

    const [isCorrect, setIsCorrect] = useState(0);
    const [isLoading, setIsLoading] = useState();
    
    const userId = sessionStorage.getItem("userId")

    useEffect(() => {
        const isO = location.state.isO;
        const answer = location.state.answer;
        let isCorrect = 0;
        
        if ((isO === true && answer === "O") || (isO === false && answer === "X")) {
            isCorrect = 1;
        } 
        setIsCorrect(isCorrect);
        saveMissionStatus(isCorrect);
    }, []);


    const saveMissionStatus = (status) => {
        axios
            .post("http://localhost:8080/api/v1/missions", {
                solvedMissionId: missionId,
                solvedUserId: userId,
                status: status
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    if (isLoading) {
        return <Loading/>;
    }

    const handleNextButtonClick = () => {
        confetti({
            particleCount: 150,
            spread: 60,
          });
        return navigate(`/kid/map/${mapNum}`);
    };

    return (
        <div>
            <Header/>
            {isLoading ?  setIsLoading(true) :
                <div>
                    <div className='maplist-container'>
                        <div className='answer-notice-box'>
                        {isCorrect ?
                            <p>참 잘했어요! 정답은 {answer} 입니다 💙</p> 
                            :
                            <p>틀렸어요ㅠㅠ 정답은 {answer} 입니다 😿</p>
                        }
                        </div>
                        <div className='solution-box'>
                        {isCorrect ?
                            <div className='sol-left-box'>
                                <p className='gpt-btn'>Chat GPT로 해설보기</p>
                                <img className="thumb-img" src={`${process.env.PUBLIC_URL}/assets/images/thumb.png`} alt=''></img>
                            </div> :
                            <div className='sol-left-box'>
                                <p className='gpt-btn incorrect'>Chat GPT로 해설보기</p>
                                <img className="thumb-img" src={`${process.env.PUBLIC_URL}/assets/images/wrong.png`} alt=''></img>
                            </div>
                        }
                            <div className='solution-text-box'>
                                <p dangerouslySetInnerHTML={{ __html: explain }}></p>
                            </div>                      
                        </div>      
                        <MapBackground mapId={missionId}/>
                        <button className="next-btn quiz" onClick={handleNextButtonClick}>
                            완료
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default SolvedMission;