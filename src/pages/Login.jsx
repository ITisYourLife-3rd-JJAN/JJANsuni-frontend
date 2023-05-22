import '../pages/css/login.css'
import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginAxios = () => {
        // console.log("========", email);
        // console.log("========", password);
        axios
            .post("http://localhost:8080/api/v1/users/login",{
                email : email,
                password : password
            })
            .then((response) => {
                console.log(response);
                const isParent = response.data.data.isParent;
                console.log(response.data)
                alert("로그인에 성공했어요✨")
                if(response.status === 200 && isParent ==="T"){
                    return navigate("/parent");
                } return navigate("/kid");
            })
            .catch((error) => {
                console.log(error.response.data);
            })
            .finally((res) => {
                console.log(res)
            } )
    }
    
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
                                onChange={(e) => {
                                    setPassword(e.target.value); }} required />
                        </div>
                      
                        <button id="btn2"  onClick={loginAxios}>로그인</button>
                        
         
                </div>

              
            </div>

        </div>
    );
};

export default Login;