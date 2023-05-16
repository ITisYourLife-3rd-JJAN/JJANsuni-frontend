import React from 'react';
import EventHeader from '../components/event/eventHeader/EventHeader';
import EventForm from '../components/event/eventForm/EventForm';

const style = {
    position: 'absolute',
    right: '0%',
    bottom: '0%'
};

const EventGPT = () => {
    return (
        <div>
            <EventHeader/>
            <EventForm/>
            <img src={`${process.env.PUBLIC_URL}/assets/images/event/투자성향확인하러가보기.png`} alt='' style={style}/>
            <img src={`${process.env.PUBLIC_URL}/assets/images/event/저금통.png`} alt='' style={style}/>
        </div>
    );
};

export default EventGPT;