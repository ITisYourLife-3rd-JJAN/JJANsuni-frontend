import { React, useState } from 'react';
import './vod.css'
import confetti from "https://esm.run/canvas-confetti@1";

const Vod = () => {
    const [watched, setWatched] = useState(false);

    const handleVideoEnded = () => {
        setWatched(true);
    };

    const handleNextButtonClick = () => {
        confetti({
            particleCount: 150,
            spread: 60,
          });
    };

    return (
        <div className='quiz-container'>
            <div className='vod-title'>
                <p>Q. 지역금융안전망(RFAs)는 지리적으로 먼 국가들이 외환보유액 등을 통해 재원을 조성하여 금융, 외환위기에 대응하는 체제이다.</p>
            </div>
            <div className='vod-box'>
                <div className='video-container'>
                    <video className='vod' src={`${process.env.PUBLIC_URL}/assets/testVideo1.mp4`} onEnded={handleVideoEnded} controls />
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