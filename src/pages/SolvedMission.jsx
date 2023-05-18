import React from 'react';
import MapBackground from '../components/Mission/MapBackground';
import { useParams } from 'react-router-dom';

const SolvedMission = () => {
    const { missionId } = useParams();
    return (
        <div>
            <MapBackground mapId={missionId}/>
        </div>
    );
};

export default SolvedMission;