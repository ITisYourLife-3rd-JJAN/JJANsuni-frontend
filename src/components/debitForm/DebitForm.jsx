import {React, useState} from 'react';
import './debitForm.css'
import { useNavigate } from 'react-router';
import axios from 'axios';

const DebitForm = () => {
    const [price, setPrice] = useState("");
    const [dealMsg, setDealMsg] = useState("");
    const navigate = useNavigate();
    const balance = 1000;
    
    const handleGoBack = () => {
        navigate(-1);
    };

    const registerDebit = () => {
        if (price <= 0 || price > 1000000) {
            alert('이체할 금액을 확인해주세요.(1~100만원까지 가능)');
            setPrice("");
            return;
          }
        if (dealMsg.length > 10){
            alert('이체 메세지는 10자를 넘길 수 없습니다.');
            setDealMsg("");
            return;
        }
        axios
            .post('http://localhost:8080/api/v1/debits',{
                sendUserId: 1,
                receivedUserId : 2,
                price : price,
                dealMsg : dealMsg,
            })
            .then((response)=>{
                console.log(response);
                alert('이체가 완료됐어요💵');
                // if(response.status === 201){
                //     return navigate ("송금자 마이페이지");
                // }
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div className='debitForm'>
            <div className='infobox'>
                <div className='fstbox'>
                    <div>
                        <div className='bigtext'>userId 님 계좌에서</div>
                        <div>잔액 balance 원</div>
                    </div>
                    <div>
                        <img onClick={handleGoBack} className='quitbtn' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt="" width={20}/>
                    </div>
                </div>
                <div>
                    <div className='bigtext'>찌글이 님 계좌로 송금합니다.</div>
                    <div>찌글이계좌번호</div>
                </div>
                <div className='pricebox'>
                    <div className='bigtext'>얼마를 보낼까요?</div>
                    <input className='debitipt' type="number" value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }} required/>
                    <div className='bigtext' style={{marginRight: "4rem"}}>원</div>
                    <div className='bigtext' style={{color:"#AAA"}}>
                    {price > balance ? (
                        <span style={{ color: "red" }}>잔액이 부족합니다</span>
                    ) : price >= 1000000 ? (
                        <span style={{ color: "red" }}>100만원 넘는 금액은 송금할 수 없습니다</span>
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
                    <input placeholder='이체 메세지(최대 10자)' className='dbtmsg' type="text" value ={dealMsg}
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