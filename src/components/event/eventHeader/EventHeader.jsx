import React from 'react';
import './eventHeader.css';

const EventHeader = () => {
    return (
        <div className='eventHeader'>
            <div className='titleBox'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/event/eventchart.png`} alt='' />
                <div className='textBox'>
                    <h1>금주의 이벤트 ! - “투자 성향 파악해보기</h1>
                    <h3>이벤트를 완료하면 ... 최대 10,000원을 받을 수도.... !</h3>
                </div>
                <div>
                    <form>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventHeader;