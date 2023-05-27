import {React, useState,useEffect} from 'react';
import './debitForm.css'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Loading from '../../lib/Loading';

const DebitForm = ({kidUserId, kidUserName}) => {
    const [price, setPrice] = useState("");
    const [dealMsg, setDealMsg] = useState("");
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");
    const [userBalance, setUserBalance] = useState("");
    const [kidAccount, setKidAccount] = useState();
    const [kidBalance, setKidBalance] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    const handleGoBack = () => {
        navigate(-1);
    };
    const getUser = () => {
        axios
            .get(`http://localhost:8080/api/v1/users/${userId}`)
            .then((response) => {
                console.log(response.data.data)
                setUserBalance(response.data.data.balance)
                setIsLoading(false); 
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        };

    useEffect(() => {
        getUser();
      }, []);

      useEffect(()=>{
        const getKid= () => {
            axios
            .get(`http://localhost:8080/api/v1/users/${kidUserId}`)
            .then((response) => {
                console.log(response.data.data)
                setKidBalance(response.data.data.balance)
                setKidAccount(response.data.data.account)
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        };

        getKid();
      },[kidUserId,kidUserName])


    const registerDebit = () => {
        getUser();
        if (price <= 0 || price > 1000000) {
            alert('이체할 금액을 확인해주세요.(1~100만원까지 가능)🤨');
            setPrice("");
            return;
          }
          if (price > {userBalance}) {
            alert('잔액이 부족합니다🥺');
            setPrice("");
            return;
          }
        if (dealMsg.length > 10){
            alert('이체 메세지는 10자를 넘길 수 없습니다.😥');
            setDealMsg("");
            return;
        }

        axios
            .post('http://localhost:8080/api/v1/debits',{
                sendUserId: userId,
                receivedUserId : kidUserId,
                price : price,
                dealMsg : dealMsg,
            })
            .then((response)=>{
                console.log(response);
                alert('이체가 완료됐어요💵');
                setPrice("");
                setDealMsg("");
                getUser();
            })
            .catch((error) => {
                console.log(error.response.data)
            });

    };

    if (isLoading) {
        return <Loading/>;
    }
    return (
        <div className='debitForm'>
            <div className='infobox'>
                <div className='fstbox'>
                    <div>
                        <div className='bigtext'>{sessionStorage.getItem("username")} 님 계좌에서</div>
                        <div>잔액 {userBalance} 원</div>
                    </div>
                    <div>
                        <img onClick={handleGoBack} className='quitbtn' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt="" width={20}/>
                    </div>
                </div>
                <div>
                    <div className='bigtext'>{kidUserName} 님 계좌로 송금합니다.</div>
                    <div>{kidAccount}</div>
                </div>
                <div className='pricebox'>
                    <div className='bigtext'>얼마를 보낼까요?</div>
                    <input style={{textAlign:"center"}} placeholder='100만원까지가능' className='debitipt' type="number" value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }} required/>
                    <div className='bigtext' style={{marginRight: "4rem"}}>원</div>
                    <div className='bigtext' style={{color:"#AAA"}}>
                    {price > 1000000 ? (
                        <span style={{ color: "#DD5475" }}>100만원 넘는 금액은 송금할 수 없습니다</span>
                    ) : price - userBalance >0 ? (
                        <span style={{ color: "#DD5475" }}>잔액이 부족합니다</span>
                    ) : price < 0 ? (
                        <span style={{ color: "#DD5475" }}>금액을 확인해주세요</span>
                      ) : (
                        <>
                        {price >= 10000
                            ? parseInt(price / 10000).toLocaleString() + "만 "
                            : ""}
                        {(price % 10000).toLocaleString()}원
                        </>
                    )}
                    </div>
                </div>
                <div className='dbtmsgbox'>
                    <div>"</div>
                    <input style={{textAlign:"center"}} placeholder='이체 메세지(최대 10자)' className='dbtmsg' type="text" value ={dealMsg}
                    onChange={(e) => {
                        setDealMsg(e.target.value);
                    }}/>
                    <div>"</div>
                </div>
                <div className='sendbtn'>
                    <div className='sendbtnin' onClick={registerDebit}>송금하기</div>
                </div>
            </div>
        </div>
    );
};

export default DebitForm;