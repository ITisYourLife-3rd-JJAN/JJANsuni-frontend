import { React, useState, useEffect } from 'react';
import './css/map.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../lib/Loading';
import Header from '../components/header/Header';

const Map = () => {
    const achieveStatus_full = 7; // 나중에 실제로 사용할 데이터 변수
    const achieveStatus = 0; // 나중에 실제로 사용할 데이터 변수
    const [isLoading, setIsLoading] = useState(true);

    const [status, setStatus] = useState();
    const [preMap, setPreMap] = useState(0);

    const mapBoxes = [];
    
    useEffect(() => {
        const getUserAchieve = async () => {
            await axios
                .get("http://localhost:8080/api/v1/users/2")
                .then((response) => {
                    console.log(response.data.data)
                    setStatus(response.data.data.achieve)

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
                    setIsLoading(false); 
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        };

        getUserAchieve();

    }, [status]);
   
    if (isLoading) {
        return <Loading/>;
    }

    for (let i = 1; i <= 6; i++) {
        let achieveStatus;

        console.log(status % 7)
        if (i < `${preMap}`) {      // 현재 맵보다 이전 맵이라면
            achieveStatus = "7/7";
        } else if (i == `${preMap}`) {     // 현재 맵이라면
            achieveStatus = `${status % 7}/7`;
        } else {
            achieveStatus = `0/7`;
        }

        const mapBoxClassName = `map-box map-box-${i} ${preMap < i ? 'gray' : ''}`;

        const mapBox = (
            <div className={mapBoxClassName} key={`map-box-${i}`}>
                <Link to={`/kid/map/${i}`}>
                    <p className='achieve-status'>{achieveStatus}</p>
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/island${i}.png`}
                    alt=''
                    className={`map map-${i}-image`} />
                </Link>
            </div>
        );

        mapBoxes.push(mapBox);
    }

    return (
        <>
            <Header/> 
            <div className='map-container'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/map/map_background.png`}
                    alt=''
                    className='map-background-image'/>
                {mapBoxes}
                
            </div> 
        </>
    );
};

export default Map;