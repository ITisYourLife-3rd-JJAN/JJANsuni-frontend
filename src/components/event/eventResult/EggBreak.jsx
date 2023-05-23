import React, { useState } from 'react';

const EggBreak = () => {
  const [count, setCount] = useState(20);
  const [lock, setLock] = useState(true);
  const [giftNum, setGiftNum] = useState(null);
  const [addressVisible, setAddressVisible] = useState(false);

  const imgArray = [
    `${process.env.PUBLIC_URL}/assets/images/map/island1.png`,
    `${process.env.PUBLIC_URL}/assets/images/map/island2.png`,
    `${process.env.PUBLIC_URL}/assets/images/map/island3.png`
  ];
  

  const textArray = [
    "1",
    "10",
    "3",
    "7",
    "1000",
    "10000"
  ];

  const hit = () => {
    if (lock) {
      if (count < 5) {
        document.getElementById("wallet").src = `${process.env.PUBLIC_URL}/assets/images/map/island4.png`;
    } else if (count < 12) {
        document.getElementById("wallet").src = `${process.env.PUBLIC_URL}/assets/images/map/island5.png`;
      } else if (count < 20) {
        document.getElementById("wallet").src = `${process.env.PUBLIC_URL}/assets/images/map/island6.png`;
      }

      if (count > 1) {
        setCount(count - 1);
      } else {
        const randomNum = Math.floor(Math.random() * 6);
        setGiftNum(randomNum);
        setLock(false);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="content">
      <div id="information" style={{fontSize:"45px", padding:"50px"}}> 
  {lock ? "지갑을 클릭해주세요!" : giftNum !== null ? `축하합니다! ${textArray[giftNum]} 원 당첨!` : ""}
</div>

      <br />
      <div id="show_count">{lock ? count : null}</div>
      <button type="button" onClick={hit} id="hit_btn">
        <img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} style={{ width: '500px' }} id="wallet" alt="wallet" />
      </button>
      <br />
      <form id="hiddenevent" action="" onSubmit={handleFormSubmit}>
        <input type="text" id="address" placeholder="CIFY를 받을 지갑주소를 입력하시오" style={{ width: '350px', height: '25px' }} />
        <button type="submit" id="submit" style={{ fontSize: '17px' }}>받기</button>
      </form>
    </div>
  );
};

export default EggBreak;
