import {React, useState} from 'react';
import './css/missionList.css'
import { useParams } from 'react-router-dom';
import MapBackground from '../components/MapBackground';
import './css/missionList.css';


const MissionList = () => {
    const { mapId } = useParams();
    const variable_o = 'o';
    const variable_x = 'x';
    const answer_img_o= `${process.env.PUBLIC_URL}/assets/images/map/${variable_o}_answer.png`;
    const answer_img_x= `${process.env.PUBLIC_URL}/assets/images/map/${variable_x}_answer.png`;
    const island_img = `${process.env.PUBLIC_URL}/assets/images/map/island${mapId}.png`;

    return (
        <div>
            <MapBackground mapId={mapId}/>
            <div className= 'map-box absol1'>
                <img src={answer_img_x} alt='' className='answer-img'/>
                <img src={island_img} alt='' className='map map-image-1' />
             </div>
             <div className= 'map-box absol2'>
                 <img src={answer_img_o} alt='' className='answer-img'/>
                <img src={island_img} alt='' className='map map-image-1' />
             </div>
             <div className= 'map-box absol3'>
                <img src={answer_img_x} alt='' className='answer-img'
                />
                <img src={island_img} alt='' className='map map-image-1' />
             </div>
             <div className= 'map-box absol4'>
                <img src={answer_img_o} alt='' className='answer-img'/>
                <img src={island_img} alt='' className='map map-image-1' />
             </div>
             <div className= 'map-box absol5'>
                <img src={answer_img_o} alt='' className='answer-img' />
                <img src={island_img} alt='' className='map map-image-1' />
             </div>
             <div className= 'map-box absol6'>
                <img src={answer_img_o} alt='' className='answer-img' />
                <img src={island_img}  alt='' className='map map-image-1' />
             </div>
             <div className= 'map-box absol7'>
                <img src={answer_img_x} alt='' className='answer-img' />
                <img src={island_img} alt='' className='map map-image-1' />
             </div>
        </div>
    );
};

export default MissionList;