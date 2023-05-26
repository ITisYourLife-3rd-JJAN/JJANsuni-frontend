import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './eventList.css'
import EventListHeader from './EventListHeader';
import Loading from '../../lib/Loading';

const EventList = () => {
    const isParent = sessionStorage.getItem("isParent");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, []);

    if(isLoading) return <Loading/>;

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
                <Link to = "/events/2" > 
                    <div className='event-card '>
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/event/end-img1.png`} 
                            alt=""
                            className='event-img' 
                        />
                        <p style={{color: "#969696"}}>종료된 이벤트입니다🙌🏻</p>
                    </div>   
                </Link>    
                <Link to = "/events/2" >      
                <div className='event-card '>
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/event/end-img2.png`} 
                        alt=""
                        className='event-img' 
                    />
                    <p style={{color: "#969696"}}>종료된 이벤트입니다🙌🏻</p>
                </div>   
                </Link>     
                <Link to = "/events/2" >    
                <div className='event-card '>
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/event/end-img3.png`} 
                        alt=""
                        className='event-img' 
                    />
                    <p style={{color: "#969696"}}>종료된 이벤트입니다🙌🏻</p>
                </div>  
                </Link>                
            </div>

        </div>
    );
};

export default EventList;