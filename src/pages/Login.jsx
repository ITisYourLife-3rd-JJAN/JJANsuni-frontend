import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className = "loginSub">
                <div className = "login-container">
                    <div className='loginSlogan'>
                        오늘도 여행을 떠나볼까요?
                    </div>
                    <div className='loginImage'>
                        <img className="trip" src="img/trip.png" alt=''/>
                    </div>
                </div>

                <div className="loginInput">
                    <form action="#" method="post">
                            
                            <label for="email">이메일</label><br/><br/>
                            <input className='loginipt' type="email" id="email" required />
                        
                            <label for="userpw">비밀번호</label><br/><br/>
                            <input className='loginipt loginpw' type="password" id="userpw" required />
                        
                      
                        <button id="btn2">로그인</button>
                        
                    </form>
                </div>

              
            </div>

        </div>
    );
};

export default Login;