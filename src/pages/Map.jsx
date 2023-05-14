import React from 'react';
import './css/map.css'

const Map = () => {
    return (
        <div className='map-container'>  
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/map/map_background.png`}
                alt=''
                className='background-image'
            />
        </div>
    );
};

export default Map;