import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapBackground from '../components/MapBackground';

const Mission = () => {
    const { missionId } = useParams();
    return (
        <div>
            <MapBackground mapId={missionId} isMap={false}/>
        </div>
    );
};

export default Mission;