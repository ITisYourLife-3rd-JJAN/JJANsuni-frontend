import React, { useState } from 'react';
import MissionHistory from '../components/MissionHistory/MissionHistory';
import MissionBanner from '../components/MissionBanner/MissionBanner';

const ParentMission = () => {
    const [kidUserId, setKidUserId] = useState();
    const [kidUserName, setKidUserName] = useState();
    console.log(kidUserId, kidUserName)
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <MissionBanner setKidUserId={setKidUserId} setKidUserName={setKidUserName}/>
            <MissionHistory kidUserId={kidUserId} kidUserName={kidUserName}/>
        </div>
    );
};

export default ParentMission;