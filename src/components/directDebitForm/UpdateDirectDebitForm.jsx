import React, {useState} from 'react';
import Select from 'react-select'
import './directDebitForm.css'
import axios from 'axios';

const UpdateDirectDebitForm = ({kidUserId, kidUserName}) => {
    const userId = sessionStorage.getItem("userId")

    const cycleoptions = [
        { value: 1, label: '매 일' },
        { value: 2, label: '매 주' },
        { value: 3, label: '매 월' }
    ]

    const everyoption = [
        {value: 1, label: '' }
    ]
    
    const weekoptions = [
        { value: 1, label: '월요일' },
        { value: 2, label: '화요일' },
        { value: 3, label: '수요일' },
        { value: 4, label: '목요일' },
        { value: 5, label: '금요일' },
        { value: 6, label: '토요일' },
        { value: 7, label: '일요일' }
    ]

    const dayoptions = []
    
    for (let i = 1; i < 32; i++) {
        const op = {}
        if (i<31) {
            
            op.value=i
            op.label=i+'일'
        } else {
            op.value=99
            op.label='말일'
        }
        dayoptions.push(op)
    };
    
    const [price, setPrice] = useState("");
    const [debitMsg, setDebitMsg] = useState("");
    const [debitDate, setDebitDate] = useState();
    const [debitCycle, setDebitCycle] = useState();
    
    if (debitCycle==2) {
        var k = weekoptions
    } else if (debitCycle==1){
        k = everyoption
    } else {
        k = dayoptions
    }

    const deleteAxios = () => {
        axios
        .delete("http://localhost:8080/api/v1/directs", {
            autoSendUserId: userId,
            autoReceivedUserId: kidUserId
        })
        .then((response) => {
            console.log(response)
            alert('자동이체가 삭제되었습니다✔')
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    const updateAxios = () => {
        if (price <= 0 || price > 1000000) {
            alert('이체할 금액을 확인해주세요.(1~100만원까지 가능)🤨');
            setPrice("");
            return;
          }
        if (debitMsg.length > 10){
            alert('이체 메세지는 10자를 넘길 수 없습니다.😥');
            setDebitMsg("");
            return;
        }
        axios
        .patch("http://localhost:8080/api/v1/directs", {
            autoSendUserId : userId,
            autoReceivedUserId : kidUserId,
            price : price,
            debitMsg : debitMsg,
            debitDate : debitDate,
            debitCycle: debitCycle
        })
        .then((response) => {
            if(response.status === 200) {
                alert('자동이체가 수정되었어요👌')
            }
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    return (
        <div className='directdebitForm'>
            <div className='ddinfobox'>
                <div className='ddtitle'>자동이체 현황</div>
                <div className='dditbox'>
                    <div className='dditiptbox'>
                        <input className='dditipt' type="number"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                        />
                        <div className='ddittext'>원을</div>
                        <div className='bigtext' style={{color:"#AAA", marginLeft: "1rem"}}>
                        {price > 1000000 ? (
                            <span style={{ color: "#DD5475" }}>100만원 넘는 금액은 송금할 수 없습니다</span>
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
                    <div className='dditiptbox'>
                        <div className='kidname'>{kidUserName}</div>
                        <div className='ddittext'>님에게</div>
                    </div>
                </div>
                <div className='dditbox'>
                    <div className='dditiptbox'>
                        <Select
                        styles={{               
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'white' : 'white',
                                boxShadow: "none",
                                fontSize: "24px",
                                "&:hover": {
                                    borderColor: "#FFF"
                                }
                            }),
                            }}
                        defaultValue={cycleoptions[2]} options={cycleoptions}
                        onChange={(e) => {
                            setDebitCycle(e.value)
                            console.log(e.value)
                            }}
                        />
                    </div>
                    <div className='dditiptbox'>
                    {debitCycle !== 1 && (
                            <Select
                            // hideSelectedOptions={true}
                            styles={{               
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'white' : 'white',
                                    boxShadow: "none",
                                    fontSize: "24px",
                                    "&:hover": {
                                        borderColor: "#FFF"
                                    }
                                }),
                                }}
                            options={k} defaultValue={k[0]}
                            onChange={(e) => {
                                setDebitDate(e.value)
                                console.log(e.value)
                            }}
                            />
                    )}

                        <div className='ddittext'>마다 이체합니다.</div>
                    </div>

                </div>
                <div className='dbmsgbox'>
                    <div>"</div>
                    <input placeholder='이체 메세지(최대 10자)'
                    className='debitmsg' type="text"
                    value={debitMsg}
                    onChange={(e) => setDebitMsg(e.target.value)}/>
                    <div>"</div>
                </div>
                <div className='ddsubmitbtn' onClick={deleteAxios}>삭제하기</div>
                <div className='ddsubmitbtn' onClick={updateAxios}>수정하기</div>
            </div>
        </div>
    )
}

export default UpdateDirectDebitForm;