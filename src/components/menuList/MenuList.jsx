import React from 'react';
import './menuList.css'
import { useNavigate } from 'react-router-dom';

const MenuList = ({ isParent }) => {
    const navigate = useNavigate();

    const navigateToMap = () => {
        navigate('/kid/map');
    };

    const menuItemClick = isParent ? null : navigateToMap;

    return (
        <div className='menuList'>
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/bank.png`} alt='' />
                <p>용돈관리</p>
            </div>
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/credit.png`} alt='' />
                <p>{isParent ? '아이 카드 내역' : '짠페이'}</p>
            </div>
            {isParent ? (
                <div className='menu-item'> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/game.png`} alt='' />
                    <p>미션 현황</p>
                </div>  
            ) : (
                <div className='menu-item'onClick={menuItemClick} > 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/game.png`} alt='' />
                    <p >미션하러 가기</p>
                </div>
            )}
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/light.png`} alt='' />
                <p>이벤트</p>
            </div>
        </div>
    );
};

export default MenuList;