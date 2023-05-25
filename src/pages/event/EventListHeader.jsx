import React from 'react';
import './eventList.css'

const EventListHeader = ({isParent}) => {
    const backgroundColor = isParent ? "#FCFF5C" : "#CDFF5C";

    return (
        <div className='eventHeader' style={{ backgroundColor: backgroundColor, color : "#000"}}>
            <div className='titleBox gpt'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/giveMoney.png`} alt='' width={250}/>
            </div>
            <div className='titleBox roll' >
                <div className='textBox'>
                    <p className='title' >매주 업데이트되는 이벤트에 참여해보세요 ✨ </p>
                    <p className='des'>이벤트에 참여하면 소액의 당첨금까지 🤫</p>
                </div>
            </div>
        </div>
    );
};

export default EventListHeader;