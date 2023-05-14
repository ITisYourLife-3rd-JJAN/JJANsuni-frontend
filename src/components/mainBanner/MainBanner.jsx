import React from 'react';
import './mainBanner.css'
import SimpleSlider from '../slider/Slider';

const MainBanner = ({ bgColor = '#CDFF5C', isParent }) => {
  const handleClick = () => {
    alert('응원메세지 보내기');
  };

  const cursorStyle = isParent ? { cursor: 'pointer' } : {};
  const backgroundColor = isParent ? 'rgba(252,255,92,0.4)' : null;

  return (
    <div className='mainBanner' style={{ backgroundColor: bgColor }}>
      <div className='mammyMsg'>
        <p className='changeChild' onClick={isParent ? handleClick : null} style={{...cursorStyle, backgroundColor}}>
          사랑하는 길연아 ~
        </p>
        <p>오늘도 힘내 화이팅 !!!💖</p>
        {isParent && (
          <span>
            <p className='sendFighting' onClick={handleClick}>
              응원메세지 작성하기
            </p>
          </span>
        )}
      </div>
      <div className='slideBanner'>
        <SimpleSlider />
      </div>
    </div>
  );

};

export default MainBanner;