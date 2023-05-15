import React from 'react';
import './css/missionList.css'
import { useParams } from 'react-router-dom';
import MapBackground from '../components/MapBackground';


const MissionList = () => {
    const { mapId } = useParams();

    return (
        <div>
            <MapBackground mapId={mapId}/>
        </div>
    );
};

export default MissionList;