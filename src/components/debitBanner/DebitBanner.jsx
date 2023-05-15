import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import './debitBanner.css'


const DebitBanner = (props) => {

    const menuoptions = [
        { value: '이체 내역', label: <div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 내역</div> },
        { value: '이체 하기', label: <Link to="/debit" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 하기</div></Link> },
        { value: '자동이체 현황', label: <Link to="/direct-debit" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/hearthand.png`} alt="" width={50}/>자동이체 현황</div></Link> },
        { value: '카드 내역', label: <div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} alt="" width={50}/>카드 내역</div> }
      ]
    const kidoptions = [
        { value: '정길연 아이', label: '정길연 아이' },
        { value: '정훈이 아이', label: '정훈이 아이' }
      ]

    const [selectedValue, setSelectedValue] = useState(menuoptions[props.idx].value);

    return (
        <div className='debitBanner' style={{backgroundColor: props.color}}>
            <div className='doSelect'>
                <Select              
                styles={{               
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'white' : 'white',
                        boxShadow: "none",
                        "&:hover": {
                            borderColor: "#FFF"
                        }
                    }),
                    }}
                options={menuoptions}
                onChange={(e) => {setSelectedValue(e.value)
                console.log(e.value, selectedValue)
                }}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                value={menuoptions.filter(function (option) {
                    return option.value === selectedValue;
                })}    
                />
            </div>
            <div className='kidBalance'>
                <div>아이 현재 잔액:</div>
                <div>찌글이 원</div>
            </div>
            <div className='kidSelect'>
                <Select
                styles={{                    
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'white' : 'white',
                        boxShadow: "none",
                        "&:hover": {
                            borderColor: "#FFF"
                        }
                    }),
                    }}
                defaultValue={kidoptions[0]} options={kidoptions}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#E5FAFC',
                      primary: '#F4C4D2',
                    },
                  })} />
            </div>
        </div>
    );
};

export default DebitBanner;