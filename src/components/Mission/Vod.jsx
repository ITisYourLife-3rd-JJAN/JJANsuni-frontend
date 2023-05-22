import { React, useState, useEffect } from 'react';
import './vod.css'
import confetti from "https://esm.run/canvas-confetti@1";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Vod = ({missionId, mapNum, missionNum, title, vodUrl}) => {
    const [watched, setWatched] = useState(false);
    const navigate = useNavigate();

    const handleVideoEnded = () => {
        setWatched(true);
    };

    const handleNextButtonClick = () => {
        confetti({
            particleCount: 150,
            spread: 60,
          });
        saveMissionStatus();
        navigate(`/kid/map/${missionId}`);
    };


    const saveMissionStatus = () => {
        axios
        .post("http://localhost:8080/api/v1/missions", {
            solvedMissionId: missionId,
            solvedUserId: 1,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }
   
    

    return (
        <div className='quiz-container'>
            <div className='vod-title'>
                <p>{title}</p>
            </div>
            <div className='vod-box'>
                <div className='video-container'>
                    <video className='vod' src={vodUrl} onEnded={handleVideoEnded} controls />
                </div>
                <button className={watched ? "next-btn" : "next-btn btn-disabled"} onClick={handleNextButtonClick} disabled={!watched}>
                    완료
                </button>
            </div>
        </div>
    );
};

export default Vod;

// onEnded 속성은 영상이 종료될 때 handleVideoEnded 함수를 호출
// controls 속성을 추가 -> 영상 컨트롤을 활성화