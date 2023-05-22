import React, {useState} from 'react';
import Select from 'react-select'
import './directDebitForm.css'
import axios from 'axios';

const DebitForm = () => {
    
    const cycleoptions = [
        { value: 1, label: '매 일' },
        { value: 2, label: '매 주' },
        { value: 3, label: '매 월' }
    ]

    const everyoption = [
        {value: 41, label: '' }
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
    
    const [autoSendUserId, setAutoSendUserId] = useState(1);
    const [autoReceivedUserId, setAutoReceivedUserId] = useState();
    const [price, setPrice] = useState();
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

    const directAxios = () => {
        console.log(autoSendUserId)
        console.log(autoReceivedUserId)
        axios
            .post("http://localhost:8080/api/v1/directs", {
                autoSendUserId : 1,
                autoReceivedUserId : 2,
                price : price,
                debitMsg : debitMsg,
                debitDate : debitDate,
                debitCycle: debitCycle
            })
            .then((response) => {
                console.log(response)
                if(response.status === 201) {
                    alert("굿굿")
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
                    </div>
                    <div className='dditiptbox'>
                        <input className='dditipt' type="number"
                            value={autoReceivedUserId}
                            onChange={(e) => {
                                setAutoReceivedUserId(e.target.value)
                                console.log(e.target.value)
                            }}
                        />
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
                            <Select
                            hideSelectedOptions={true}
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

                        <div className='ddittext'>마다 이체합니다.</div>
                    </div>

                </div>
                <input placeholder='이곳에 작성하는 메세지가 자녀에게 표시됩니다.'
                className='debitmsg' type="text"
                value={debitMsg}
                onChange={(e) => setDebitMsg(e.target.value)}/>
                <div className='ddsubmitbtn' onClick={directAxios}>등록하기</div>
            </div>
        </div>
    );
};

export default DebitForm;