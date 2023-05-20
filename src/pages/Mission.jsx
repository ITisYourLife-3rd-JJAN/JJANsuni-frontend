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

    const getQuiz = () => {
        axios
        .get(`http://localhost:8080/api/v1/admin/mission/${missionId}`)
        .then((response) => {
            const data = response.data.data;
            data.missionType === "Q" ? setIsQuiz(true) : setIsQuiz(false);
            console.log(data);
            setMapNum(data.mapNum);
            setMissionNum(data.missionNum);
            setTitle(data.title);
            setExplain(data.explain);
            setVodUrl(data.vodUrl);

        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        getQuiz();
    }, [])
    
    return (
        <div>
            {isQuiz ? <Quiz missionId={missionId} mapNum={mapNum} missionNum={missionNum} title={title} explain={explain} /> : <Vod missionId={missionId} mapNum={mapNum} missionNum={missionNum} title={title} vodUrl={vodUrl} />}
            <MapBackground mapId={missionId} isMap={false} />
        </div>
    );
};

export default Mission;