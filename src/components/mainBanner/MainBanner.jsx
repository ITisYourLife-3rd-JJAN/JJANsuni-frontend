import React from 'react';
import './mainBanner.css'
import SimpleSlider from '../slider/Slider';

const MainBanner = () => {
    return (
        <div className='mainBanner'>
            <div className='mammyMsg'>
                <p>우리 딸 ~ 오늘도 사랑해~~❤️</p>
            </div>
            <div className='slideBanner'>
                <SimpleSlider/>
            </div>
        </div>
    );
};

export default MainBanner;