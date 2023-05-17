import React from 'react';
import './menuList.css'
import { Link, useNavigate } from 'react-router-dom';

const MenuList = ({ isParent }) => {
    const navigate = useNavigate();

    const navigateToMap = () => {
        navigate('/kid/map');
    };

    const menuItemClick = isParent ? null : navigateToMap;

    return (
        <div className='menuList'>
            <Link to="/debit-history">
                <div className='menu-item'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/bank.png`} alt='' />
                    <p>용돈관리</p>
                </div>
            </Link>
            <Link to="/pay">
                <div className='menu-item'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/credit.png`} alt='' />
                    <p>{isParent ? '아이 카드 내역' : '짠페이'}</p>
                </div>
            </Link>
            {isParent ? (
                <Link to="/">
                <div className='menu-item'> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/game.png`} alt='' />
                    <p>미션 현황</p>
                </div>
                </Link>
            ) : (
                <Link to="/kid/map">
                <div className='menu-item'onClick={menuItemClick} > 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/game.png`} alt='' />
                    <p >미션하러 가기</p>
                </div>
                </Link>
            )}
            <Link to="/">
            <div className='menu-item'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/light.png`} alt='' />
                <p>이벤트</p>
            </div>
            </Link>
        </div>
    );
};

export default MenuList;