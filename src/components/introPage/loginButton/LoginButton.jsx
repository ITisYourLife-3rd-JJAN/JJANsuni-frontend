import React from "react";
import './loginButton.css';
import { Link } from "react-router-dom";

function LoginButton(props){
    return <Link to="/login" className='sellink'><button id="login" type="button">로그인</button></Link>
}

export default LoginButton;