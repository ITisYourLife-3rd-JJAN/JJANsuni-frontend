import React from 'react';
import './mainBanner.css'
import SimpleSlider from '../slider/Slider';
import { useNavigate } from "react-router-dom";

const MainBanner = ({ bgColor = '#CDFF5C', isParent }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/message")
  };

  const cursorStyle = isParent ? { cursor: 'pointer' } : {};
  const backgroundColor = isParent ? 'rgba(252,255,92,0.4)' : null;

  return (
    <div className='mainBanner' style={{ backgroundColor: bgColor }}>
      <div className='mammyMsg'>
        {isParent && (
          <div>
            <p className='sendFighting' onClick={handleClick}>
                작성하기
            </p>
          </div>
        )}
        <p className='changeChild' onClick={isParent ? handleClick : null} style={{...cursorStyle, backgroundColor}}>
          사랑하는 길연아 ~
        </p>
        <p>오늘도 힘내 화이팅 !!!💖</p>
        
      </div>
      <div className='slideBanner'>
        <SimpleSlider />
      </div>
    </div>
  );

};

export default MainBanner;