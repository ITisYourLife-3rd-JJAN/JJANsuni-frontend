import React, { useState, useEffect } from 'react';
import './myBigCard.css';
import axios from 'axios';
import Modal from 'react-modal';

const MyBigCard = ({ isParent }) => {
  const containerStyle = {
    backgroundColor: isParent ? '#FCFF5C' : '#CDFF5C',
  };

  const [isGirl, setIsGirl] = useState(true);
  let imgSrc = '';

  if (isParent === true && isGirl === true) {
    imgSrc = `${process.env.PUBLIC_URL}/assets/images/mammy.png`;
  } else if (isParent !== true && isGirl === true) {
    imgSrc = `${process.env.PUBLIC_URL}/assets/images/girl.png`;
  } else if (isParent === true && isGirl !== true) {
    imgSrc = `${process.env.PUBLIC_URL}/assets/images/daddy.png`;
  } else {
    imgSrc = `${process.env.PUBLIC_URL}/assets/images/boy.png`;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState();
  const [successMessage, setSuccessMessage] = useState('');

  const handleChargePay = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage('');
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPrice(value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault(); 

    if (!price || price <= 0 || price > 100000) {
        alert('이체할 금액을 확인해주세요.(1~100만원까지 가능)🤨');
        setPrice("");
        return;
      }

    axios
      .patch('http://localhost:8080/api/v1/debits/charge', {
        userId: 1,
        price: price,
      })
      .then((response) => {
        console.log(response);
        setPrice("");
        setSuccessMessage('잔액 충전 완료됐습니다.😊');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-profile-card-container" style={containerStyle}>
      <img src={`${imgSrc}`} alt="" className="me-profile" />
      <div className="my-info-box">
        <p id="my-name">정길연</p>
        {!isParent ? (
          <>
            <p id="my-favorite">좋아하는 것: 게임 강아지</p>
            <p id="my-dream">꿈: 연예인</p>
          </>
        ) : (
          <>
            <p id="my-balance">잔액: 10000원</p>
          </>
        )}
        <p id="my-account">계좌번호: 882-602-04182779</p>
        <p>strongfox@gmail.com</p>
      </div>
      <div className="my-edit-box">
        <p>탈퇴하기</p>
        <p>회원정보수정</p>
        {!isParent ? (
          <></>
        ) : (
          <>
            <p onClick={handleChargePay}>짠페이 충전하기</p>
          </>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal"
        ariaHideApp={false}
      >
        <h2>충전하기 <img onClick={closeModal} className='quitbtn' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt=""/> </h2>
        
        <form onSubmit={handlePaymentSubmit}>
          <label>
            금액:
            <input placeholder="최대 100만원까지 가능" type="number" className="iptBalance" value={price} onChange={handlePriceChange} />
          </label>
          {successMessage && <p style={{textAlign:"center"}}>{successMessage}</p>}
          {!successMessage && <button className="chargebtn" type="submit">충전</button>}
        </form>
      </Modal>
    </div>
  );
};

export default MyBigCard;