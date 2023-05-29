import {React, useState, useEffect} from 'react';
import './css/missionList.css'
import { useParams, useNavigate } from 'react-router-dom';
import MapBackground from '../components/Mission/MapBackground';
import './css/missionList.css';
import axios from 'axios';
import Header from '../components/header/Header';
import Loading from '../lib/Loading';


const MissionList = () => {
    const { mapId } = useParams();

    const answer_img_o = `${process.env.PUBLIC_URL}/assets/images/map/o_answer.png`;
    const answer_img_x = `${process.env.PUBLIC_URL}/assets/images/map/x_answer.png`;
    const island_img = `${process.env.PUBLIC_URL}/assets/images/map/island${mapId}.png`;
  
    const [missionData, setMissionData] = useState([]);
    const [isAnswerAvailable, setIsAnswerAvailable] = useState(true); 
    const [isSolved, setIsSolved] = useState(false); 
    const [isLoading, setIsLoading] = useState(true);

    const userId = sessionStorage.getItem("userId");

    const navigate = useNavigate();
    
    useEffect(() => {
        const getUserMission = async () => {
          try {
            const response = await axios.post("http://localhost:8080/api/v1/missions/map-status", {
              solvedUserId: userId,
              mapNum: mapId
            });
            setMissionData(response.data.data);
            setIsLoading(false)
          } catch (error) {
            console.log(error.response.data);
            setIsLoading(false)
          }
        };
        getUserMission();
      }, []);
      
      useEffect(() => {
        const isMissionNumExist = missionData.some(mission => mission.missionNum !== undefined);
        setIsSolved(isMissionNumExist);
      }, [missionData]);

      if(isLoading) return <Loading/>;
      
    return (
        <div>
            <Header/>
            <MapBackground mapId={mapId} isMap={true}/>

            {Array.from({ length: 7 }, (_, index) => (
                <div key={index + 1} className={`map-box absol${index + 1}`}>
                    {index < missionData.length ? (
                    <>
                        {missionData[index].status === 1 ? (
                            <img src={answer_img_o} alt='' className='answer-img show' />
                            ) : (
                            <img
                                src={answer_img_x}
                                alt=''
                                className='answer-img show'
                                onClick={() => {
                                    if (isAnswerAvailable && !isSolved) {
                                        navigate(`/kid/map/${mapId}/mission/${index + 1}`);
                                    }
                                }}/>
                        )}
                        <img
                            src={island_img}
                            alt=''
                            className={`map map-image-${index + 1} ${isAnswerAvailable ? '' : 'gray'}`} />
                    </>
                    ) : index === missionData.length ? (
                    <img
                        src={island_img}
                        alt=''
                        className='map map-image-1 pointer'
                        onClick={() => {
                        navigate(`/kid/map/${mapId}/mission/${index + 1}`);
                        }} />
                    ) : (
                    <img
                        src={island_img}
                        alt=''
                        className='map map-image-1 gray'
                    />
                    )}
                </div>
            ))}
        </div>
            
    );
};

export default MissionList;