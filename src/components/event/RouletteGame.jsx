import React, { useState, useRef, useEffect } from 'react';
import './rouletteGame.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

const RouletteGame = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [resultValue, setResultValue] = useState(null);
  const imageRef = useRef(null);
  const rotationIntervalRef = useRef(null);

  const navigate = useNavigate();

  const updateBalance = (index) => {
    axios
        .patch('http://localhost:8080/api/v1/users/debit', {
          userId : sessionStorage.getItem("userId"),
          price : getResultValue(index)
        })
        .then((response) => {
          alert(`${getResultValue(index)}원이 당첨되었습니다💜`);
          if(sessionStorage.getItem("isParent") === "T") navigate("/parent");
          else navigate("/kid");
        })
        .catch((error) => {
          console.log(error);
        })
    }

  const handleButtonClick = () => {
    if (isRotating) {
      stopRotation();
    } else {
      startRotation();
    }
  };

  const startRotation = () => {
    setIsRotating(true);
    rotationIntervalRef.current = setInterval(rotateImage, 10);
  };

  const stopRotation = () => {
    setIsRotating(false);
    clearInterval(rotationIntervalRef.current);
    const rotation = imageRef.current.style.transform.match(/rotate\((\d+)deg\)/);
    if (rotation && rotation[1]) {
      const degrees = parseInt(rotation[1]);
      const index = Math.floor((degrees % 360) / 45);
      setResultValue(getResultValue(index));
      updateBalance(index);
    }
  };

  const rotateImage = () => {
    imageRef.current.style.transform = `rotate(${(360 / 45) * rotationCount}deg)`;
    rotationCount++;
    if (rotationCount === 61) {
      rotationCount = 1;
    }
  };

  const getResultValue = (index) => {
    const values = [600, 50, 10, 999, 30, 500, 300, 100];
    return values[index];
  };

  let rotationCount = 1;

  return (
    <div>
      <img className='roll-img' ref={imageRef} src={`${process.env.PUBLIC_URL}/assets/images/roll.png`} alt="" />
      <button className='roll-btn' onClick={handleButtonClick}>{isRotating ? '멈추기' : '회전하기'}</button>
    </div>
  );
};

export default RouletteGame;
