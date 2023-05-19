import { React, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapBackground from '../components/Mission/MapBackground';
import Quiz from '../components/Mission/Quiz';
import Vod from '../components/Mission/Vod';

const Mission = () => {
    const { missionId } = useParams();
    const [isQuiz, setIsQuiz] = useState(false);

    return (
        <div>
            {isQuiz ? <Quiz missionId={missionId} /> : <Vod />}
            <MapBackground mapId={missionId} isMap={false} />
        </div>
    );
};

export default Mission;