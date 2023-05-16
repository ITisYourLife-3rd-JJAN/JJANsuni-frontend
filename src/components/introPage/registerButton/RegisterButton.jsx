import React from "react";
import './registerButton.css';
import confetti from "https://esm.run/canvas-confetti@1";

function RegisterButton(){
    function onClick(){
        confetti({
            particleCount: 150,
            spread: 60,
          });
    }
    return <button id="register" onClick={onClick}>회원가입</button>
}

export default RegisterButton;