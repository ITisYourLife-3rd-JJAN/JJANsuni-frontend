import { React, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapBackground from '../components/Mission/MapBackground';
import Quiz from '../components/Mission/Quiz';
import Vod from '../components/Mission/Vod';
import axios from 'axios';
import Header from '../components/header/Header';
import Loading from '../lib/Loading';

const Mission = () => {
    const { mapId, missionId } = useParams();
    const [isQuiz, setIsQuiz] = useState(false);
    const [explain, setExplain] = useState("");
    const [title, setTitle] = useState("");
    const [vodUrl, setVodUrl] = useState("");
    const [answer, setAnswer] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const getQuiz = () => {
            axios
                .get(`http://localhost:8080/api/v1/admin/map/${mapId}/mission/${missionId}`)
                .then((response) => {
                    console.log(response)
                    const data = response.data.data;
                    data.missionType === "Q" ? setIsQuiz(true) : setIsQuiz(false);

                    setTitle(data.title);
                    setExplain(data.explain);
                    setVodUrl(data.vodUrl);
                    setAnswer(data.answer);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                })
        };
    
        getQuiz();
    }, []);
    
    if (isLoading) return <Loading/>;

    return (
        <div>
            <Header/>
            {isQuiz ? 
                <Quiz missionId={missionId} mapNum={mapId}  missionNum={missionId} title={title} explain={explain} answer={answer} /> 
                : <Vod missionId={missionId} mapNum={mapId} missionNum={missionId} title={title} vodUrl={vodUrl}/>
            }
            <MapBackground mapId={missionId} isMap={false} />
        </div>
    );
};

export default Mission;