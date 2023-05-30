import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../lib/Loading';
import { markThousand } from '../../lib/markThousand';

const DebitHistory = ({ kidUserId, kidUserName }) => {
  const [debitData, setDebitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const userId = sessionStorage.getItem('userId');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/debits/${userId}`);
        if (response.data.businessCode === 'D002') {
          setErrorMessage(response.data.errorMessage + "😭");
        } else {
          let data = response.data.data;
  
          // Filter by kidUserId if provided
          if (kidUserId) {
            data = data.filter(
              (item) => item.sendUserId === kidUserId || item.receivedUserId === kidUserId
            );
          }
  
          // Sort data by date and time in descending order
          data.sort((a, b) => new Date(b.isCreated) - new Date(a.isCreated));
  
          setDebitData(
            data.map((item) => ({
              ...item,
              isCreated: new Date(item.isCreated).toLocaleDateString('ko-KR'),
              price: markThousand(item.price)
            }))
          );
        }
        setIsLoading(false);
      } catch (error) {
        // console.log(error.response.data);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [kidUserId]);
  

if (isLoading) {
  return <Loading/>;
}

  if (errorMessage) {
    return (
      <tbody>
        <tr>
          <td style={{ textAlign: 'center' }}>{errorMessage}</td>
        </tr>
      </tbody>
    );
  }

  if(debitData.length <1){
    return (
      <tbody>
        <tr>
          <td style={{ textAlign: 'center' }}>"이체내역이 없어요😭"</td>
        </tr>
      </tbody>
    );
  }

  const hightlightSend = (item) => {
    if (item.sendUserId == userId) {
      return { backgroundColor: 'rgba(205,255,92,0.5)' };
    }
    return {};
  };

  const hightlighReceive = (item) => {
    if (item.receivedUserId == userId) {
      return { backgroundColor: 'rgba(205,255,92,0.5)' };
    }
    return {};
  };

  return (
    <tbody>
      <tr>
        <td>이체 날짜</td>
        <td>보낸 사람</td>
        <td>받는 사람</td>
        <td>이체 메시지</td>
        <td>이체 금액</td>
      </tr>
      {debitData.map((item, index) => (
        <tr key={index}>
          <td>{item.isCreated}</td>
          <td>
            <span style={hightlightSend(item)}>{item.sendUserName}</span>
          </td>
          <td>
            <span style={hightlighReceive(item)}>{item.receivedUserName}</span>
          </td>
          <td>{item.dealMsg}</td>
          <td>{item.price}원</td>
        </tr>
      ))}
    </tbody>
  );
};

export default DebitHistory;