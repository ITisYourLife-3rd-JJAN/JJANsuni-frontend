import React from "react";
import './registerButton.css';
import confetti from "https://esm.run/canvas-confetti@1";
import { Link } from "react-router-dom";

function RegisterButton(){
    function onClick(){
        confetti({
            particleCount: 150,
            spread: 60,
          });
    }
    return <Link to="/join" className='sellink'><button id="register" onClick={onClick}>회원가입</button></Link>
}

export default RegisterButton;