import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import './missionBanner.css'
import axios from 'axios';


const DebitBanner = ({setKidUserId, setKidUserName}) => {

    const userId = 1;
    const [childData, setChildData] = useState([]);
    const [kidOptions, setKidOptions] = useState([]);

    const kidoptions = [
        { value: '정길연 아이', label: '정길연 아이' },
        { value: '정훈이 아이', label: '정훈이 아이' }
    ]

    useEffect(() => {
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

                    setKidOptions(updateKidOptions)
                    // console.log(updateKidOptions)
                    // console.log(childData)
                })
        }
        getChildAxios()
    }, [userId])

    if (kidOptions.length !== 0) {
    return (
        <div className='debitBanner'>
            <div className='mSelect'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/game.png`} alt='' width={60}/>
                <div>문제풀이 현황</div>
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
                defaultValue={kidOptions[0]} options={kidOptions}
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