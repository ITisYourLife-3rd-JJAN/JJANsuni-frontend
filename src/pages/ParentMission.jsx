import React from 'react';
import MissionHistory from '../components/MissionHistory/MissionHistory';
import MissionBanner from '../components/MissionBanner/MissionBanner';

const ParentMission = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <MissionBanner/>
            <MissionHistory />
        </div>
    );
};

export default ParentMission;