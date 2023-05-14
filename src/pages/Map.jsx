import React from 'react';
import './css/map.css'

const Map = () => {
    return (
        <div className='map-container'>  
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/map/map_background.png`}
                alt=''
                className='map-background-image'
            />
            <div className='map-box map-box-1'>
                <p>7/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-1-image'
                />
            </div>

            <div className='map-box map-box-2'>
                <p>1/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island2.png`}
                    alt=''
                    className='map map-2-image'
                />
             </div>
            
            <div className='map-box map-box-3'>
                <p>0/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island3.png`}
                    alt=''
                    className='map map-3-image'
                />
             </div>
             
            <div className='map-box map-box-4'>
                <p>0/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island4.png`}
                    alt=''
                    className='map map-4-image'
                />
             </div>
            
            <div className='map-box map-box-5'>
                <p>0/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island5.png`}
                    alt=''
                    className='map map-5-image'
                />
             </div>
             
            <div className='map-box map-box-6'>
                <p>0/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island6.png`}
                    alt=''
                    className='map map-6-image'
                />
             </div>
        </div>
    );
};

export default Map;