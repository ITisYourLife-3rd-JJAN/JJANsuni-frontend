import React from 'react';
import './header.css'
import { Link, useNavigate  } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate ();
    const Logout = () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('isParent');
        navigate('./login');
    }
    const role = (sessionStorage.getItem('isParent')==="T") ? true : false;

    return (
        <div className='header'>
            <p>JJAN순이의 경제여행</p>
            {role && <Link to = {"/parent/profile"}><p>{sessionStorage.getItem('username')}부모님✨</p></Link>}
            {!role && <Link to = {"/kid/profile"}><p>{sessionStorage.getItem('username')}아이님✨</p></Link>}
            
            <p className='logout' onClick={Logout}>로그아웃</p>
        </div>
    );
};
export default Header;