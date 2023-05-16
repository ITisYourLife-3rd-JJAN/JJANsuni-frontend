import React, {useState} from 'react';
import Select from 'react-select'
import './directDebitForm.css'

const DebitForm = () => {
    
    const cycleoptions = [
        { value: '1', label: '매 일' },
        { value: '2', label: '매 주' },
        { value: '3', label: '매 월' }
    ]

    const everyoption = [
        {value: '41', label: '' }
    ]
    
    const weekoptions = [
        { value: '51', label: '월요일' },
        { value: '52', label: '화요일' },
        { value: '53', label: '수요일' },
        { value: '54', label: '목요일' },
        { value: '55', label: '금요일' },
        { value: '56', label: '토요일' },
        { value: '57', label: '일요일' }
    ]

    const dayoptions = []
    
    for (let i = 1; i < 32; i++) {
        const op = {}
        if (i<31) {
            
            op.value=i
            op.label=i+'일'
        } else {
            op.value='99'
            op.label='말일'
        }
        dayoptions.push(op)
    };
    

    const [selectedValue, setSelectedValue] = useState(cycleoptions[0]);

    if (selectedValue==2) {
        var k = weekoptions
    } else if (selectedValue==1){
        k = everyoption
    } else {
        k = dayoptions
    }
    
    return (
        <div className='directdebitForm'>
            <div className='ddinfobox'>
                <div className='ddtitle'>자동이체 현황</div>
                <div className='dditbox'>
                    <div className='dditiptbox'>
                        <input className='dditipt' type="number" />
                        <div className='ddittext'>원을</div>
                    </div>
                    <div className='dditiptbox'>
                        <input className='dditipt' type="text" />
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
                        onChange={(e) => {setSelectedValue(e.value)
                            console.log(selectedValue)
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
                            />

                        <div className='ddittext'>마다 이체합니다.</div>
                    </div>
                </div>
                <div className='ddsubmitbtn'>등록하기</div>
            </div>
        </div>
    );
};

export default DebitForm;