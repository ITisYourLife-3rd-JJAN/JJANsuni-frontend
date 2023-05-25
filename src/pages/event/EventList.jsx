import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './eventList.css'
import EventListHeader from './EventListHeader';

const EventList = () => {
    const isParent = sessionStorage.getItem("isParent");
    return (
        <div>
            <Header/>
            <EventListHeader isParent={isParent}/>
            <div className='event-container'>
                <Link to = "/event" > 
                    <div className='event-card num1'>
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/event/event1.png`} 
                            alt=""
                            className='event-img' 
                        />
                        <p>ChatGPT와 함께 투자성향을 알아보자!</p>
                    </div>
                </Link>
                <Link to = "/events/2" > 
                    <div className='event-card num2'>
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/event/event2.png`} 
                            alt=""
                            className='event-img' 
                        />
                        <p>[특⭐️주간]모두가 당첨되는 룰렛</p>
                    </div>
                </Link>             
            </div>
        </div>
    );
};

export default EventList;