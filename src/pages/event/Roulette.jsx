import React from 'react';
import '../../components/event/rouletteGame.css'
import Header from '../../components/header/Header';
import EventHeader from '../../components/event/eventHeader/EventHeader';
import RouletteGame from '../../components/event/RouletteGame'


const Roulette = () => {
    return (
        <div className='event-wrap'>
            <Header/>
            <EventHeader isGpt={false}/>
            <img 
                src={`${process.env.PUBLIC_URL}/assets/images/roll_arrow.png`} 
                alt=""
                width={60}
                className='roll-arrow' 
            />
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