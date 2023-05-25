import React from 'react';
import './eventHeader.css';

const EventHeader = ({isGpt}) => {
    const backgroundColor = isGpt ? "#DD5475" : "#E7A7F5";

    return (
        <div className='eventHeader' style={{ backgroundColor: backgroundColor }}>
            
                { isGpt ?
                    <div className='titleBox gpt'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/event/eventchart.png`} alt='' /> : "" 
                        <div className='textBox'>
                            <h1>금주의 이벤트 ! - “투자 성향 파악해보기</h1>
                            <h3>이벤트를 완료하면 ... 최대 10,000원을 받을 수도.... !</h3>
                        </div>
                    </div>
                        :
                    <div className='titleBox roll'>
                        <div className='textBox'>
                            <p className='title' >금주의 이벤트 ! - 돌려돌려 짠돌판 🎉</p>
                            <p className='des'>본 이벤트는 하루에 1번만 참여 가능합니다</p>
                        </div>
                    </div>
                
                }
                
                <div>
                    <form>
                        
                    </form>
                </div>
            </div>
    );
};

export default EventHeader;