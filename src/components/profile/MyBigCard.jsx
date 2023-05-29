import React, { useState, useEffect } from 'react';
import './myBigCard.css';
import axios from 'axios';
import Modal from 'react-modal';
import Loading from '../../lib/Loading';

const MyBigCard = ({ isParent }) => {
  const containerStyle = {
    backgroundColor: isParent ? '#FCFF5C' : '#CDFF5C',
  };

  const [isGirl, setIsGirl] = useState(true);
  let imgSrc = '';
  useEffect(() => {
    if (sessionStorage.getItem('gender') === 'M') {
      setIsGirl(false);
    }
  }, []);

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
  const [phoneNum, setPhoneNum] = useState();
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [successEditMessage, setSuccessEditMessage] = useState('');
  const userId = sessionStorage.getItem("userId");
  const [userBalance, setUserBalance] = useState("");
  const [famCode, setFamCode] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getUser = () => {
    setIsLoading(true)
    axios
        .get(`http://localhost:8080/api/v1/users/${userId}`)
        .then((response) => {
            console.log(response.data.data)
            setUserBalance(response.data.data.balance)
            setFamCode(response.data.data.famCode)
            setUserAccount(response.data.data.account)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    };

    useEffect(() => {
      getUser();
    }, []);
  
  if (isLoading) {
    return <Loading/>;
  }

  const handleChargePay = () => {
    setIsModalOpen(true);
  };
  
  const handlEdit = () => {
    setIsUserInfoModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage('');
  };

  const closeEditModal = () => {
    setIsUserInfoModalOpen(false);
    setSuccessEditMessage('');
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPrice(value);
  };

  const handlePaymentSubmit = (e) => {
    getUser();
    e.preventDefault(); 

    if (!price || price <= 0 || price > 1000000) {
        alert('이체할 금액을 확인해주세요.(1~100만원까지 가능)🤨');
        setPrice("");
        return;
      }

    axios
      .patch('http://localhost:8080/api/v1/debits/charge', {
        userId: userId,
        price: price,
      })
      .then((response) => {
        console.log(response);
        setPrice("");
        setSuccessMessage('잔액 충전 완료됐습니다.😊');
        getUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProfileSubmit = (event) => {
    event.preventDefault();
  
    if (!phoneNum || phoneNum.trim() === '') {
      alert('전화번호를 입력해주세요.🤨');
      return;
    }
    axios
      .patch('http://localhost:8080/api/v1/users/info-edit', {
        userId: sessionStorage.getItem('userId'),
        phoneNum: phoneNum,
      })
      .then((response) => {
        console.log(response);
        setSuccessEditMessage('회원정보가 변경되었습니다.😊');
      })
      .catch((error) => {
        console.log(error);
        alert('전화번호 양식을 확인해주세요.😥');
      });
  };
  
  const handlePhoneNumChange = (event) => {
    const value = event.target.value;
    setPhoneNum(value);
  };

  return (
    <div className="my-profile-card-container" style={containerStyle}>
      <img src={`${imgSrc}`} alt="" className="me-profile" />
      <div className="my-info-box">
        <p id="my-name">{sessionStorage.getItem('username')}</p>
        {!isParent ? (
          <>
            <p>장래희망 : 백엔드 개발자</p>
          </>
        ) : (
          <>
            <p id="my-balance">잔액 : {userBalance}원</p>
          </>
        )}
        <p id="my-account">계좌번호 : {userAccount}</p>
        <p>가족코드 : {famCode}</p>
      </div>
      <div className="my-edit-box">
        <p>탈퇴하기</p>
        <p onClick={handlEdit}>회원정보수정</p>
        {!isParent ? (
          <></>
        ) : (
          <>
            <p onClick={handleChargePay}>짠페이 충전하기</p>
          </>
        )}
      </div>
 
      <Modal
        isOpen={isUserInfoModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Modal"
        className="modal"
        ariaHideApp={false}
      >
        <h2>변경하기 <img onClick={closeEditModal} className='quitbtn card' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt=""/> </h2>
        
        <form onSubmit={handleProfileSubmit}>
          <label>
            전화번호:
            <input placeholder="01012345678" type="tel" className="iptBalance" value={phoneNum} onChange={handlePhoneNumChange} />
          </label>
          {successEditMessage && <p style={{textAlign:"center"}}>{successEditMessage}</p>}
          {!successEditMessage && <button className="chargebtn" type="submit">변경</button>}
        </form>
      </Modal>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal"
        ariaHideApp={false}
      >
        <h2>충전하기 <img onClick={closeModal} className='quitbtn card' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt=""/> </h2>
        
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