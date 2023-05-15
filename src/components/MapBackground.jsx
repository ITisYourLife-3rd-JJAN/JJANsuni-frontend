import React from 'react';

const MapBackground = ({mapId, isMap}) => {
    return (
        <div className='maplist-container'>
            <p className='step-text'> {isMap ? "MAP" : "STEP"} {mapId}</p>  
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