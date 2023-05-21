import { React, useState, useEffect } from 'react';
import './css/map.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Map = () => {
    const achieveStatus_full = 7; // 나중에 실제로 사용할 데이터 변수
    const achieveStatus = 0; // 나중에 실제로 사용할 데이터 변수
    var mapNum = 1; // 각각의 map-box에 맞게 값을 할당할 변수

    const [status, setStatus] = useState();

    useEffect(() => {
        const getUserAchieve = async () => {
            await axios
                .get("http://localhost:8080/api/v1/users/1")
                .then((response) => {
                    console.log(response.data.data)
                    setStatus(response.data.data.achieve)
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        };
    
        getUserAchieve();
    }, [status]);

    

    return (
        <div className='map-container'>  
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/map/map_background.png`}
                alt=''
                className='map-background-image'
            />
            
            <div className={`map-box map-box-1 ${achieveStatus_full !== achieveStatus_full ? 'gray' : ''}`}>
                <Link to={`/kid/map/${mapNum}`} key={mapNum}>
                    <p className='achieve-status'> {status}/7</p>
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-1-image'
                    />
                </Link>
            </div>
           

            <div className={`map-box map-box-2 ${achieveStatus_full !== achieveStatus_full ? 'gray' : ''}`}>
                <Link to={`/kid/map/${mapNum}`}>
                    <p className='achieve-status'>{achieveStatus_full}/7</p>
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island2.png`}
                    alt=''
                    className='map map-2-image'
                    />
                </Link>
            </div>
            
            <div className={`map-box map-box-3 ${achieveStatus !== achieveStatus_full ? 'gray' : ''}`}>
                <Link to={`/kid/map/3`}>
                    <p className='achieve-status'>{achieveStatus}/7</p>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/map/island3.png`}
                        alt=''
                        className='map map-3-image'
                    />
                </Link>
             </div>
             
             <div className={`map-box map-box-4 ${achieveStatus !== achieveStatus_full ? 'gray' : ''}`}>
                <p className='achieve-status'>{achieveStatus}/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island4.png`}
                    alt=''
                    className='map map-4-image'
                />
             </div>
            
             <div className={`map-box map-box-5 ${achieveStatus !== achieveStatus_full ? 'gray' : ''}`}>
                <p className='achieve-status'>{achieveStatus}/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island5.png`}
                    alt=''
                    className='map map-5-image'
                />
             </div>
             
             <div className={`map-box map-box-6 ${achieveStatus !== achieveStatus_full ? 'gray' : ''}`}>
                <p className='achieve-status'>{achieveStatus}/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island6.png`}
                    alt=''
                    className='map map-6-image'
                />
             </div>
        </div>
    );
};

export default Map;