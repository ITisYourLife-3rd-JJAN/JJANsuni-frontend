import axios from 'axios';
import React, { useState } from 'react';

const EggBreak = () => {
  const [count, setCount] = useState(20);
  const [lock, setLock] = useState(true);
  const [giftNum, setGiftNum] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // 버튼 상태를 관리하기 위한 상태 추가


  const textArray = [
    "1","2","3","4","5","11","10","3","2","7","8","9","18","19","100","231","452","91","40","37","1200","50","700","1400","3600","600","1000","10000"
  ];

  const hit = () => {
    if (lock) {

      if (count > 1) {
        setCount(count - 1);
      } else {
        const randomNum = Math.floor(Math.random() * 28);
        setGiftNum(randomNum);
        setLock(false);
        setShowButton(true);
      }
    }
  };
    
      const getEggImage = () => {
        if (count < 2) {
          return `${process.env.PUBLIC_URL}/assets/images/event/egg4.png`;
        }else if(count <5){
          return `${process.env.PUBLIC_URL}/assets/images/event/egg3.png`;
        }else if (count < 12) {
          return `${process.env.PUBLIC_URL}/assets/images/event/egg2.png`;
        } else if (count < 20) {
          return `${process.env.PUBLIC_URL}/assets/images/event/egg1.png`;
        }
        else {
          return `${process.env.PUBLIC_URL}/assets/images/event/egg.png`;
        }
      };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
    .patch('http://localhost:8080/api/v1/debits/game',{
      userId : 1,
      price : textArray[giftNum],
    })
    .then((response)=>{
      console.log(response);
      alert("당첨금 "+textArray[giftNum]+"원 지급 완료!🤩")
      setIsButtonDisabled(true); // 버튼을 비활성화
    })
    .catch((error)=>{
      console.log(error)
    });
  };

  let giveComplete;
  if (isButtonDisabled) {
    giveComplete = "당첨금 지급완료";
  } else {
    giveComplete = "당첨금 받기";
  }

  return (
  <>
    <div className="eggContent">
      <div id="information" style={{fontSize:"45px", padding:"50px"}}> 
  {lock ? "알을 깨주세요!!" : giftNum !== null ? `축하합니다! ${textArray[giftNum]} 원 당첨!` : ""}
    </div>

      <br />
      <div id="show_count">{lock ? count : null}</div>
      <div className="eggCharge">
        <img src={getEggImage()} className="eggImg" alt="wallet" onClick={hit}/>
        
      </div>
      {giftNum !== null && showButton && (
            <form id="hiddenevent" action="" onSubmit={handleFormSubmit}>
              <button type="submit" className="eggSubmit" style={{ fontSize: '17px' }}
              disabled={isButtonDisabled}>{giveComplete}</button>
            </form>
        )}
    </div>
    </>
  );
};

export default EggBreak;
