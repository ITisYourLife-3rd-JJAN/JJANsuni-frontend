import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div class = "loginSub">

                <div className='loginSlogan'>
                    오늘도 여행을 떠나볼까요?
                </div>

                <div className='loginImage'>
                    <img ClassName="trip" src="img/trip.png"></img>
                </div>
                

                <div className="loginInput">
                    <form action="#" method="post">
                        <p>
                            <label for="email">이메일</label><br/><br/>
                            <input className='loginipt' type="email" id="email" required></input>
                        </p>
                        <p>
                            <label for="userpw">비밀번호</label><br/><br/>
                            <input className='loginipt loginpw' type="password" id="userpw" required></input>
                        </p>
                        <p>
                        <button id="btn2">로그인</button>
                        </p>
                    </form>
                </div>

              
            </div>

        </div>
    );
};

export default Login;