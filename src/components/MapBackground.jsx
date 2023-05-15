import React from 'react';

const MapBackground = ({mapId}) => {
    return (
        <div className='maplist-container'>
            <p className='step-text'>STEP 1 {mapId}</p>  
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/map/maplist_background.png`}
                alt=''
                className='maplist-background-image'
            />
            <img 
                src={`${process.env.PUBLIC_URL}/assets/images/clouds.png`} 
                alt=""
                className='map-cloud'
            />
        </div>
    );
};

export default MapBackground;