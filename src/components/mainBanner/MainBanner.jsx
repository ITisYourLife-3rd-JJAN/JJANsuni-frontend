import { React, useState, useEffect } from 'react';
import './mainBanner.css'
import SimpleSlider from '../slider/Slider';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { checkFinalSound } from '../../lib/checkFinalSound';

const MainBanner = ({ bgColor = '#CDFF5C', isParent }) => {

  const [cheerUpMsg, setCheerUpMsg] = useState("");
  const [name, setName] = useState("");
  const userId = sessionStorage.getItem("userId");

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/message")
  };

  const cursorStyle = isParent ? { cursor: 'pointer' } : {};
  const backgroundColor = isParent ? 'rgba(252,255,92,0.4)' : null;

  const getEnding = () => {
    const lastTwoChars = name.slice(-2); 
    
    if(checkFinalSound(name)) return `${lastTwoChars}야`;
    else return `${lastTwoChars}아`;
  };


  useEffect(() => {
    const fetchData = () => {
      if (isParent === "F") {
        axios
          .get(`http://localhost:8080/api/v1/users/${userId}`)
          .then((response) => {
            console.log(response.data.data);
            setCheerUpMsg(response.data.data.cheerUpMsg);
            setName(response.data.data.name);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      } else {
        axios
          .get(`http://localhost:8080/api/v1/users/family-list/${userId}`)
          .then((response) => {
            console.log(response.data.data);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    };

    fetchData();

  }, [isParent, userId]);



  return (
    <div className='mainBanner' style={{ backgroundColor: bgColor }}>
      <div className='mammyMsg'>
        {isParent && (
          <div>
            <p className='sendFighting' onClick={handleClick}>
                작성하기
            </p>
          </div>
        )}
        <p className='changeChild' onClick={isParent ? handleClick : null} style={{...cursorStyle, backgroundColor}}>
          사랑하는 {getEnding()} ~
        </p>
        <p>{cheerUpMsg}</p>
        
      </div>
      <div className='slideBanner'>
        <SimpleSlider />
      </div>
    </div>
  );

};

export default MainBanner;