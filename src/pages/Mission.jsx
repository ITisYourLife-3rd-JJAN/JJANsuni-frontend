import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapBackground from '../components/Mission/MapBackground';
import Quiz from '../components/Mission/Quiz';

const Mission = () => {
    const { missionId } = useParams();
    return (
        <div>
            <Quiz missionId={missionId}/>
            <MapBackground mapId={missionId} isMap={false}/>
        </div>
    );
};

export default Mission;