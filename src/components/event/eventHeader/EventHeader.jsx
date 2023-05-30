import React from 'react';
import './eventHeader.css';

const EventHeader = ({isGpt}) => {
    const backgroundColor = isGpt ? "#DD5475" : "#E7A7F5";

    return (
        <div className='eventList-Header' style={{ backgroundColor: backgroundColor, color: "#fff"}}>
            
                { isGpt ?
                    <div className='titleBox gpt'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/event/eventchart.png`} alt='' />
                        <div className='textBox'>
                            <p className='event-title'>금주의 이벤트 ! - “투자 성향 파악해보기</p>
                            <p className='event-des'>이벤트를 완료하면 ... 최대 10,000원을 받을 수도.... !</p>
                        </div>
                    </div>
                        :
                    <div className='titleBox roll'>
                        <div className='textBox'>
                            <p className='event-title' >금주의 이벤트 ! - 돌려돌려 짠돌판 🎉</p>
                            <p className='event-des'>본 이벤트는 하루에 1번만 참여 가능합니다</p>
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