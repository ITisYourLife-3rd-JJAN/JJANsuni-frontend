import React from 'react';
import MapBackground from '../components/Mission/MapBackground';
import { useParams } from 'react-router-dom';
import './css/solvedMission.css'

const SolvedMission = () => {
    const { missionId } = useParams();
    return (
        <div className='maplist-container'>
            <div className='answer-notice-box'>
                <p>참 잘했어요! 정답은 X 입니다</p>
            </div>
            <div className='solution-box'>
                <div className='sol-left-box'>
                    <div>
                        <p className='gpt-btn'>Chat GPT로 해설보기</p>
                    </div>
                    <img className="thumb-img" src={`${process.env.PUBLIC_URL}/assets/images/thumb.png`} alt=''></img>
                </div>
                <div className='solution-text-box'>
                    <p>지역금융안정망에 대한 틀린 설명입니다.재원규모와 재원조성 방식, 자금지원 방식,IMF와의 협력, 지원조건 등에 따라 다양한 형태가 있습니다.</p>
                </div>
            </div>
            
            <MapBackground mapId={missionId}/>
        </div>
    );
};

export default SolvedMission;