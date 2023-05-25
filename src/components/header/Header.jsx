import React from 'react';
import './header.css'
import { Link, useNavigate  } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate ();
    
    const Logout = () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('isParent');
        sessionStorage.removeItem('gender');
        navigate('/Login');
    }

    const role = (sessionStorage.getItem('isParent')==="T") ? true : false;
    const isMale = (sessionStorage.getItem('gender')==="M") ? true : false;
    
    return (
        <div className='header'>
            {role && <Link to = {"/parent"}><p>JJAN순이의 경제여행</p></Link>}
            {(!role) && <Link to = {"/kid"}><p>JJAN순이의 경제여행</p></Link>}
            
            {role && isMale && <Link to = {"/parent/profile"}><p>{sessionStorage.getItem('username')} 아빠🙍‍♂️</p></Link>}
            {role && !isMale && <Link to = {"/parent/profile"}><p>{sessionStorage.getItem('username')} 엄마🙍</p></Link>}
            {(!role) && isMale && <Link to = {"/kid/profile"}><p>{sessionStorage.getItem('username')} 왕자님✨</p></Link>}
            {(!role) && (!isMale) && <Link to = {"/kid/profile"}><p>{sessionStorage.getItem('username')} 공주님✨</p></Link>}
            <p className='logout' onClick={Logout}>로그아웃</p>
        </div>
    );
};
export default Header;