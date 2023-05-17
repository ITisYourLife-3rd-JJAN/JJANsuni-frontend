import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <p>JJAN순이의 경제여행</p>
            <Link to = {"/kid/profile"}><p>정길연 아이님✨</p></Link>
            <p className='logout'>로그아웃</p>
        </div>
    );
};

export default Header;