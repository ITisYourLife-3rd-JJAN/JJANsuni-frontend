import React from 'react';
import './menuList.css'

const MenuList = () => {
    return (
        <div className='menuList'>
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/bank.png`} alt='' />
                <p>모너치</p>
            </div>
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/credit.png`} alt='' />
                <p>카드내역</p>
            </div>
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/game.png`} alt='' />
                <p>문제풀기</p>
            </div>
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/light.png`} alt='' />
                <p>이벤트</p>
            </div>
        </div>
    );
};

export default MenuList;