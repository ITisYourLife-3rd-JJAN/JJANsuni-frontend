import React from 'react';
import RouletteGame from '../components/event/RouletteGame';
import EventHeader from '../components/event/eventHeader/EventHeader';
import './../components/event/rouletteGame.css'
import Header from '../components/header/Header';

const Roulette = () => {
    return (
        <div className='event-wrap'>
            <Header/>
            <EventHeader isGpt={false}/>
            <RouletteGame/>
            <img 
                src={`${process.env.PUBLIC_URL}/assets/images/pigcoin.png`} 
                alt=""
                className='pig-img' 
            />
        </div>
    );
};

export default Roulette;