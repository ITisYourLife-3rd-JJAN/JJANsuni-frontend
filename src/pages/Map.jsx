import { React, useState, useEffect } from 'react';
import './css/map.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Map = () => {
    const achieveStatus_full = 7; // 나중에 실제로 사용할 데이터 변수
    const achieveStatus = 0; // 나중에 실제로 사용할 데이터 변수
    var mapNum = 1; // 각각의 map-box에 맞게 값을 할당할 변수

    const [status, setStatus] = useState();
    const [preStatus, setPreStatus] = useState(0);
    const [preMap, setPreMap] = useState(0);

    useEffect(() => {
        const getUserAchieve = async () => {
            await axios
                .get("http://localhost:8080/api/v1/users/1")
                .then((response) => {
                    console.log(response.data.data)
                    setStatus(response.data.data.achieve)

                    // setPreStatus(status % 8)
                    setStatus(16)

                    var quotient = Math.floor(status / 7);
                    switch (quotient) {
                    case 0:
                        setPreMap(1);
                        break;
                    case 1:
                        setPreMap(2);
                        break;
                    case 2:
                        setPreMap(3);
                        break;
                    case 3:
                        setPreMap(4);
                        break;
                    case 4:
                        setPreMap(5);
                        break;
                    default:
                        setPreMap(6);
                        break;
                    }
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
                className='map-background-image'/>
            
            <div className={`map-box map-box-1 ${ preMap < 1 ? 'gray' : ''}`}>
                <Link to={`/kid/map/${mapNum}`} key={mapNum}>
                    <p className='achieve-status'> {preStatus}/7</p>
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island1.png`}
                    alt=''
                    className='map map-1-image'
                    />
                </Link>
            </div>
           

            <div className={`map-box map-box-2 ${ preMap < 2 ? 'gray' : ''}`}>
                <Link to={`/kid/map/${mapNum}`}>
                    <p className='achieve-status'>{preStatus}/7</p>
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island2.png`}
                    alt=''
                    className='map map-2-image'
                    />
                </Link>
            </div>
            
            <div className={`map-box map-box-3 ${ preMap < 3 ? 'gray' : ''}`}>
                <Link to={`/kid/map/3`}>
                    <p className='achieve-status'>{preStatus % 7}/7</p>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/map/island3.png`}
                        alt=''
                        className='map map-3-image'
                    />
                </Link>
             </div>
             
             <div className={`map-box map-box-4 ${preMap < 4 ? 'gray' : ''}`}>
                <p className='achieve-status'>{preStatus}/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island4.png`}
                    alt=''
                    className='map map-4-image'
                />
             </div>
            
             <div className={`map-box map-box-5 ${ preMap < 5 ? 'gray' : ''}`}>
                <p className='achieve-status'>{preStatus}/7</p>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island5.png`}
                    alt=''
                    className='map map-5-image'
                />
             </div>
             
             <div className={`map-box map-box-6 ${ preMap < 6  ? 'gray' : ''}`}>
                <p className='achieve-status'>{preStatus}/7</p>
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