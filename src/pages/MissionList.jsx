import {React, userState} from 'react';
import './css/missionList.css'
import { useParams } from 'react-router-dom';
import MapBackground from '../components/MapBackground';
import './css/missionList.css';


const MissionList = () => {
    const { mapId } = useParams();
    
    return (
        <div>
            <MapBackground mapId={mapId}/>
            <div className= 'map-box absol1'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-image-1'
                />
             </div>
             <div className= 'map-box absol2'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-image-1'
                />
             </div>
             <div className= 'map-box absol3'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-image-1'
                />
             </div>
             <div className= 'map-box absol4'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-image-1'
                />
             </div>
             <div className= 'map-box absol5'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-image-1'
                />
             </div>
             <div className= 'map-box absol6'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-image-1'
                />
             </div>
             <div className= 'map-box absol7'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-image-1'
                />
             </div>
        </div>
    );
};

export default MissionList;