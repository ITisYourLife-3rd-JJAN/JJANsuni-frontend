import '../pages/css/login.css'
import {React, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import Loading from '../lib/Loading';
import { clear } from '@testing-library/user-event/dist/clear';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const loginAxios = () => {
        setIsLoading(true); 
        axios
            .post("http://localhost:8080/api/v1/users/login",{
                email : email,
                password : password
            })
            .then((response) => {
                    const userId = response.data.data.userId;
                    const userName = response.data.data.name;
                    const isParent = response.data.data.isParent;
                    const gender = response.data.data.gender;
                    sessionStorage.setItem('userId', userId);
                    sessionStorage.setItem('username', userName);
                    sessionStorage.setItem('isParent', isParent);
                    sessionStorage.setItem('gender', gender);
                    setIsLoading(false); 
                    alert("로그인에 성공했어요✨")
                if(response.status === 200 && isParent ==="T"){
                    return navigate("/parent");
                } return navigate("/kid");
            })
            .catch((error) => {
                alert("아이디 또는 비밀번호를 확인해주세요🛠️")
                setIsLoading(false); 
                return navigate("/login")
            })
            .finally((res) => {
                console.log(res)
            } )
    }
    if (isLoading) {
        return <Loading/>;
    }

      const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            loginAxios();
        }
      };

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
                    
                        <div>
                            <label for="email">이메일</label><br/><br/>
                            <input className='loginipt' type="email" id="email" 
                                value={email} 
                                onChange={(e) => {
                                    setEmail(e.target.value); }} required />
                        </div>
                        <div>
                            <label for="userpw">비밀번호</label><br/><br/>
                            <input className='loginipt loginpw' type="password" id="userpw" 
                                value={password}
                                onKeyPress={handleOnKeyPress}
                                onChange={(e) => {
                                    setPassword(e.target.value); }} 
                                />
                        </div>
                      
                        <button id="loginBtn"  onClick={loginAxios}>로그인</button>
                        <Link to = {"/join"}><p id="RegisterText">아직 회원이 아니신가요?</p></Link>
         
                </div>

              
            </div>

        </div>
    );
};

export default Login;