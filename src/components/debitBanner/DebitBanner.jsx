import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import './debitBanner.css'
import axios from 'axios';


const DebitBanner = ({idx, color, setKidUserId, setKidUserName}) => {

    const userId = sessionStorage.getItem("userId");
    const parent = sessionStorage.getItem("isParent");

    const [childData, setChildData] = useState([]);
    const [kidInfo, setKidInfo] = useState();
    const [kidOptions, setKidOptions] = useState([{ value: '아이 선택하기', label: '아이 선택하기' }]);
    const [familyOptions, setFamilyOptions] = useState([{ value: '가족 선택하기', label: '가족 선택하기' }])
    const [kidBalance, setKidBalance] = useState([0]);
    const [nowKidBalance, setNowKidBalance] = useState(kidBalance[0])

    const parentMenuOptions = [
        { value: '이체 하기', label: <Link to="/debit" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 하기</div></Link> },
        { value: '자동이체 현황', label: <Link to="/direct-debit" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/hearthand.png`} alt="" width={50}/>자동이체 현황</div></Link> },
        { value: '이체 내역', label: <Link to="/debit-history" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 내역</div></Link> },
        { value: '카드 내역', label: <Link to="/card" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} alt="" width={50}/>카드 내역</div></Link> }
    ]
    const kidMenuOptions = [
        { value: '이체 하기', label: <Link to="/debit" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 하기</div></Link> },
        { value: '이체 내역', label: <Link to="/debit-history" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/wallet.png`} alt="" width={50}/>이체 내역</div></Link> },
        { value: '카드 내역', label: <Link to="/card" className='sellink'><div className='seldiv'><img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} alt="" width={50}/>카드 내역</div></Link> }
    ]


    const [parentSelectedValue, setParentSelectedValue] = useState(parentMenuOptions[idx].value);
    const [kidSelectedValue, setKidSelectedValue] = useState(kidMenuOptions[idx].value);
    
    useEffect(() => {
            if(parent === "F") {
            const getUserAxios = async () => {
                await axios
                .get(`http://localhost:8080/api/v1/users/${userId}`)
                .then((response) => {
                    const data = response.data.data;
                    console.log(data.balance);
                    setKidInfo(data.balance)
                })
            }
            getUserAxios()

            const getFamilyAxios = async () => {
                await axios
                .get(`http://localhost:8080/api/v1/users/family-list/${userId}`)
                .then((response) => {
                    const data = response.data.data;
                    const updateFamilyOptions = data.map(family => ({
                        value: family.userId,
                        label: family.name
                    }))
                    setFamilyOptions(updateFamilyOptions)
                })
            }
            getFamilyAxios()
        }
        }, [])

    useEffect(() => {
        if(parent === "T"){
            const getChildAxios = async () => {
            await axios
                    .get(`http://localhost:8080/api/v1/users/family-list/${userId}`)
                    .then((response) => {
                        const data = response.data.data;
                        const filterData = data.filter(child => child.isParent === "F")
                        setChildData(filterData.map(child => ({
                            ...child,
                        })))
                        // console.log(data)
                        // console.log(filterData.name)
                        const updateKidOptions = filterData.map(child => ({
                            value: child.userId,
                            label: child.name+" 아이"
                        }))
                        const updateBalance = filterData.map(child => (
                            child.balance
                        ))
                        setKidBalance([...kidBalance, ...updateBalance])
    
                        setKidOptions([...kidOptions,
                            ...updateKidOptions])
                        // console.log(updateKidOptions)
                        // console.log(childData)
                    })
            }
            getChildAxios()
        }
    }, [])


    if (kidOptions.length !== 0) {
        if(parent === "T") {
            return (
                <div className='debitBanner' style={{backgroundColor: color}}>
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
                        options={parentMenuOptions}
                        onChange={(e) => {setParentSelectedValue(e.value)
                        }}
                        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                        value={parentMenuOptions.filter(function (option) {
                            return option.value === parentSelectedValue;
                        })}    
                        />
                    </div>
                    <div className='kidBalance'>
                        <div className='usespace'>아이 현재 잔액: </div>
                        <div> {nowKidBalance} 원</div>
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
                        })} 
                        onChange={(e) => {
                            setKidUserId(e.value)
                            setKidUserName(e.label)
                            setNowKidBalance(kidBalance[kidOptions.indexOf(e)])
                        }}
                        />
                    </div>
                </div>
            );
        }
        
        return (
            <div className='debitBanner' style={{backgroundColor: color}}>
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
                    options={kidMenuOptions}
                    onChange={(e) => {setKidSelectedValue(e.value)
                    }}
                    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                    value={kidMenuOptions.filter(function (option) {
                        return option.value === kidSelectedValue;
                    })}    
                    />
                </div>
                <div className='kidBalance'>
                    <div className='usespace'>내 잔액: </div>
                    <div> {kidInfo} 원</div>
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
                    options={familyOptions}
                    defaultValue={familyOptions[0]}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary25: '#E5FAFC',
                            primary: '#F4C4D2',
                        },
                    })} 
                    onChange={(e) => {
                        setKidUserId(e.value)
                        setKidUserName(e.label)
                    }}
                    />
                </div>
            </div>
        );
    }

};

export default DebitBanner;