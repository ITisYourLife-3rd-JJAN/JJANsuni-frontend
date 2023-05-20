import { React, useState, useEffect } from 'react';
import MapBackground from '../components/Mission/MapBackground';
import { useParams, useLocation } from 'react-router-dom';
import './css/solvedMission.css'
import axios from 'axios';

const SolvedMission = () => {
    const { missionId } = useParams();

    const location = useLocation();
    const isO = location.state.isO;
    // const explain = location.state.explain;
    // const mapNum = location.state.mapNum;
    // const missionNum = location.state.missionNum;
    const answer = location.state.answer;

    const [isCorrect, setIsCorrect] = useState(1);

    useEffect(() => {
        saveMissionStatus();

        if (isO === true && answer === "O") {
          setIsCorrect(1);
        } else {
          setIsCorrect(0);
        }   
    }, [isO, answer]);

    
    const saveMissionStatus = () => {
        axios
        .post("http://localhost:8080/api/v1/missions", {
            solvedMissionId : missionId,
            solvedUserId : 1,
            status : isCorrect
        })
        .then((response) => {
           console.log(response);
           
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
        {isCorrect ?
            <div>
                <div className='maplist-container'>
                    <div className='answer-notice-box'>
                        <p>참 잘했어요! 정답은 X 입니다</p>
                    </div>
                    <div className='solution-box'>
                        <div className='sol-left-box'>
                            <p className='gpt-btn'>Chat GPT로 해설보기</p>
                            <img className="thumb-img" src={`${process.env.PUBLIC_URL}/assets/images/thumb.png`} alt=''></img>
                        </div>
                        <div className='solution-text-box'>
                            <p>지역금융안정망에 대한 틀린 설명입니다.재원규모와 재원조성 방식, 자금지원 방식,IMF와의 협력, 지원조건 등에 따라 다양한 형태가 있습니다.</p>
                        </div>
                    </div>
                    <MapBackground mapId={missionId}/>
                </div>
            </div> :
            <div>
                <div className='maplist-container'>
                    <div className='answer-notice-box'>
                        <p>틀렸어요ㅠㅠ 정답은 X 입니다</p>
                    </div>
                    <div className='solution-box'>
                        <div className='sol-left-box'>
                            <p className='gpt-btn incorrect'>Chat GPT로 해설보기</p>
                            <img className="thumb-img" src={`${process.env.PUBLIC_URL}/assets/images/wrong.png`} alt=''></img>
                        </div>
                        <div className='solution-text-box'>
                            <p>지역금융안정망에 대한 틀린 설명입니다.재원규모와 재원조성 방식, 자금지원 방식,IMF와의 협력, 지원조건 등에 따라 다양한 형태가 있습니다.</p>
                        </div>
                    </div>
                    <MapBackground mapId={missionId}/>
                </div>
            </div>
            }
            
        </div>
    );
};

export default SolvedMission;