import {React, useState, useEffect} from 'react';
import './css/missionList.css'
import { useParams, useNavigate } from 'react-router-dom';
import MapBackground from '../components/Mission/MapBackground';
import './css/missionList.css';
import axios from 'axios';

const MissionList = () => {
    const { mapId } = useParams();
    const variable_o = 'o';
    const variable_x = 'x';
    const answer_img_o= `${process.env.PUBLIC_URL}/assets/images/map/${variable_o}_answer.png`;
    const answer_img_x= `${process.env.PUBLIC_URL}/assets/images/map/${variable_x}_answer.png`;
    const island_img = `${process.env.PUBLIC_URL}/assets/images/map/island${mapId}.png`;

    const navigate = useNavigate();

    useEffect(() => {
        const getUserMission = async() => {
            await axios
                .post("http://localhost:8080/api/v1/missions/map-status", {
                    solvedUserId : 2,
                    mapNum : mapId
                })
                .then((response) => {
                    console.log(response.data.data)
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        };
        getUserMission();
    }, []);

 
    /*
    true + false => 현재 풀이 가능
    true + true => 풀이 완료 
    false + false => 아직 안푼 문제 (풀이 불가)
    */
    const [isAnswerAvailable, setIsAnswerAvailable] = useState(true);   // gray, none gray 
    const [isSolved, setIsSolved] = useState(false);   // 문제가 풀렸다면, true (체크, 논체크)

    return (
        <div>
            <MapBackground mapId={mapId} isMap={true}/>
                
            <div className='map-box absol1'>
                {isSolved ?
                    <img src={answer_img_o} alt='' className='answer-img show' />
                    :
                    <img src={answer_img_o} alt='' className={isAnswerAvailable ? 'answer-img pointer' : 'answer-img'}
                        onClick={() => {
                        if (isAnswerAvailable && !isSolved) {
                            navigate(`/kid/map/${mapId}/mission/1`)
                        }
                        }} />
                }
                <img src={island_img} alt='' className={`map map-image-1 ${isAnswerAvailable ? '' : 'gray'}`} />
            </div>

            <div className='map-box absol2'>
                {isSolved ?
                    <img src={answer_img_o} alt='' className='answer-img show' />
                    :
                    <img src={answer_img_o} alt='' className={isAnswerAvailable ? 'answer-img pointer' : 'answer-img'}
                        onClick={() => {
                        if (isAnswerAvailable && !isSolved) {
                            navigate(`/kid/map/${mapId}/mission/2`)
                        }
                        }} />
                }
                <img src={island_img} alt='' className={`map map-image-1 ${isAnswerAvailable ? '' : 'gray'}`} />
            </div>

            <div className='map-box absol3'>
                {isSolved ?
                    <img src={answer_img_x} alt='' className='answer-img show' />
                    :
                    <img src={answer_img_x} alt='' className={isAnswerAvailable ? 'answer-img pointer' : 'answer-img'}
                        onClick={() => {
                        if (isAnswerAvailable && !isSolved) {
                            navigate(`/kid/map/${mapId}/mission/3`)
                        }
                        }} />
                }
                <img src={island_img} alt='' className={`map map-image-1 ${isAnswerAvailable ? '' : 'gray'}`} />
            </div>

            <div className='map-box absol4'>
                {isSolved ?
                    <img src={answer_img_x} alt='' className='answer-img show' />
                    :
                    <img src={answer_img_x} alt='' className={isAnswerAvailable ? 'answer-img pointer' : 'answer-img'}
                        onClick={() => {
                        if (isAnswerAvailable && !isSolved) {
                            navigate(`/kid/map/${mapId}/mission/4`)
                        }
                        }} />
                }
                <img src={island_img} alt='' className={`map map-image-1 ${isAnswerAvailable ? '' : 'gray'}`} />
            </div>

            <div className='map-box absol5'>
                {isSolved ?
                    <img src={answer_img_x} alt='' className='answer-img show' />
                    :
                    <img src={answer_img_x} alt='' className={isAnswerAvailable ? 'answer-img pointer' : 'answer-img'}
                        onClick={() => {
                        if (isAnswerAvailable && !isSolved) {
                            navigate(`/kid/map/${mapId}/mission/5`)
                        }
                        }} />
                }
                <img src={island_img} alt='' className={`map map-image-1 ${isAnswerAvailable ? '' : 'gray'}`} />
            </div>

            <div className='map-box absol6'>
                {isSolved ?
                    <img src={answer_img_o} alt='' className='answer-img show' />
                    :
                    <img src={answer_img_o} alt='' className={isAnswerAvailable ? 'answer-img pointer' : 'answer-img'}
                        onClick={() => {
                        if (isAnswerAvailable && !isSolved) {
                            navigate(`/kid/map/${mapId}/mission/6`)
                        }
                        }} />
                }
                <img src={island_img} alt='' className={`map map-image-1 ${isAnswerAvailable ? '' : 'gray'}`} />
            </div>

            <div className='map-box absol7'>
                {isSolved ?
                    <img src={answer_img_o} alt='' className='answer-img show' />
                    :
                    <img src={answer_img_o} alt='' className={isAnswerAvailable ? 'answer-img pointer' : 'answer-img'}
                        onClick={() => {
                        if (isAnswerAvailable && !isSolved) {
                            navigate(`/kid/map/${mapId}/mission/7`)
                        }
                        }} />
                }
                <img src={island_img} alt='' className={`map map-image-1 ${isAnswerAvailable ? '' : 'gray'}`} />
            </div>


        </div>
    );
};

export default MissionList;