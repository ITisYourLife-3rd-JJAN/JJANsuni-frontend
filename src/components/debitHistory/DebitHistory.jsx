import { React, useState, useEffect } from 'react';
import axios from 'axios';

const DebitHistory = () => {
    const [debitData, setDebitData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const userId = 3; // userId임시
  
    useEffect(() => {
        const fetchData = async () => {
        await axios
                .get(`http://localhost:8080/api/v1/debits/${userId}`)
                .then((response) => {
                    if (response.data.businessCode === 'D002') {
                        setErrorMessage(response.data.errorMessage+"😭");
                    }
                    else{ 
                    const data = response.data.data;
                    console.log(data);
                    setDebitData(data.map(item => ({
                        ...item,
                        isCreated: new Date(item.isCreated).toLocaleDateString('ko-KR')
                    })));
                }
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error.response.data);
                    setIsLoading(false);
                })
        };
    
        fetchData();
    }, [userId]);
  

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (errorMessage) {
        return (
            <tbody>
            <tr>
            <td style={{textAlign: 'center'}}>{errorMessage}</td>
              </tr>
            </tbody>
        );
      }

    const hightlightSend = (item) =>{
        if(item.sendUserId === userId){
            return {backgroundColor: 'rgba(205,255,92,0.5)'} ;
        }
        return {};
    }

    const hightlighReceive = (item) =>{
        if(item.receivedUserId === userId){
            return {backgroundColor: 'rgba(205,255,92,0.5)'};
        }
        return {};
    }
    
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
            <td><span style={hightlightSend(item)}>{item.sendUserName}</span></td>
            <td><span style={hightlighReceive(item)}>{item.receivedUserName}</span></td>
            <td>{item.dealMsg}</td>
            <td>{(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
        </tr>
      )
      )}
          </tbody>
)
        
};

export default DebitHistory;