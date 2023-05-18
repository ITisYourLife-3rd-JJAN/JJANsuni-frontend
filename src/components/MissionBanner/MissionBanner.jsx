import React from 'react';
import Select from 'react-select'
import './missionBanner.css'


const DebitBanner = () => {

    const kidoptions = [
        { value: '정길연 아이', label: '정길연 아이' },
        { value: '정훈이 아이', label: '정훈이 아이' }
      ]


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