import { React, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapBackground from '../components/Mission/MapBackground';
import Quiz from '../components/Mission/Quiz';
import Vod from '../components/Mission/Vod';
import axios from 'axios';

const Mission = () => {
    const { missionId } = useParams();
    const [isQuiz, setIsQuiz] = useState(false);
    const [mapNum, setMapNum] = useState("");
    const [missionNum, setMissionNum] = useState("");
    const [explain, setExplain] = useState("");
    const [title, setTitle] = useState("");
    const [vodUrl, setVodUrl] = useState("");
    const [answer, setAnswer] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const getQuiz = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/v1/admin/mission/${missionId}`);
            const data = response.data.data;
            data.missionType === "Q" ? setIsQuiz(true) : setIsQuiz(false);
            console.log(data);
            setMapNum(data.mapNum);
            setMissionNum(data.missionNum);
            setTitle(data.title);
            setExplain(data.explain);
            setVodUrl(data.vodUrl);
            setAnswer(data.answer);
            setIsLoading(false);
          } catch (error) {
            console.log(error);
            setIsLoading(false);
          }
        };
    
        getQuiz();
      }, [missionId]);
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
    return (
        <div>
            {isQuiz ? <Quiz missionId={missionId} mapNum={mapNum} missionNum={missionNum} title={title} explain={explain} answer={answer} /> : <Vod missionId={missionId} mapNum={mapNum} missionNum={missionNum} title={title} vodUrl={vodUrl}/>}
            <MapBackground mapId={missionId} isMap={false} />
        </div>
    );
};

export default Mission;