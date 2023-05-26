import React from 'react';
import EventHeader from '../../components/event/eventHeader/EventHeader';
import EventForm from '../../components/event/eventForm/EventForm';



const EventGPT = () => {
    return (
        <div>
            <EventHeader isGpt={true} />
            <EventForm/>
        </div>
    );
};

export default EventGPT;