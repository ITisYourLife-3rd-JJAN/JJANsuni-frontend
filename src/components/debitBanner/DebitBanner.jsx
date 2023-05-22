import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import './debitBanner.css'
import axios from 'axios';


const DebitBanner = (props) => {

    const userId = 1;
    const [childData, setChildData] = useState([]);
    const [kidOptions, setKidOptions] = useState([]);

    const menuoptions = [
        { value: '이체 내역', label: <Link to="/debit-history" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 내역</div></Link> },
        { value: '이체 하기', label: <Link to="/debit" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 하기</div></Link> },
        { value: '자동이체 현황', label: <Link to="/direct-debit" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/hearthand.png`} alt="" width={50}/>자동이체 현황</div></Link> },
        { value: '카드 내역', label: <Link to="/card" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} alt="" width={50}/>카드 내역</div></Link> }
      ]

    const [selectedValue, setSelectedValue] = useState(menuoptions[props.idx].value);

    useEffect(() => {
        const getChildAxios = async () => {
        await axios
                .get(`http://localhost:8080/api/v1/users/family-List/${userId}`)
                .then((response) => {
                    const data = response.data.data;
                    const filterData = data.filter(child => child.isParent === "F")
                    setChildData(filterData.map(child => ({
                        ...child,
                    })))
                    console.log(data)
                    console.log(filterData.name)
                    const updateKidOptions = filterData.map(child => ({
                        value: child.userId,
                        label: child.name
                    }))
                    setKidOptions(updateKidOptions)
                })
        }
        getChildAxios()
    }, [userId])


    if (kidOptions.length !== 0) {
        
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
                    options={kidOptions}
                    defaultValue={kidOptions[0]}
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
    }
    
};

export default DebitBanner;