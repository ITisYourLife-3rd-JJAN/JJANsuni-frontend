import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CommonJoin = ({isParent}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("20001208");
    const [famCode, setFamCode] = useState("귀여운도깨비");
    const role = isParent ? "T" : "F";
    const navigate = useNavigate();
    
    const registerAxios = () => {
        axios
            .post("http://localhost:8080/api/v1/users/join", {
                name : username,
                email : email,
                password : password,
                phoneNum : phoneNum,
                gender : gender,
                birthday : birthday,
                famCode : famCode,
                isParent : role
            })
            .then((response) => {
                console.log(response);
                alert("회원가입에 성공했어요✨")
                if(response.status === 200){
                    return navigate("/login");
                }
            }).catch((err) => {
                console.log(err.request.status)
        });
    }

    return (
        <div className='join-container'>
        <div className='aa'>
            <div >
                <div className='input-box'> 
                    <label for="username">이름 {isParent}</label>
                    <input type="text" id="username" className='joinipt' 
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value); }} 
                        required />
                </div>

                <div className='input-box'> 
                    <label for="email">이메일</label>
                    <div className='email-box'>
                        <input type="email" id="email" className='joinipt' 
                                value={email} 
                                onChange={(e) => {
                                    setEmail(e.target.value); }} 
                                required />
                        <button id="existBtn">중복확인</button>
                    </div>
                </div>
        
                <div className='input-box'> 
                    <label for="userpw">비밀번호</label>
                    <input type="password" id="userpw" 
                        value={password} className='joinipt joinpw' 
                        onChange={(e) => {
                            setPassword(e.target.value); }} 
                        required></input>
                </div>

                <div className='input-box'> 
                    <label for="userpwCheck">비밀번호 확인</label>
                    <input type="password" id="userpwCheck" className='joinipt joinpw' required></input>
                </div>

                <div className='input-box'> 
                    <label for="phoneNumber">전화번호</label>
                    <input type="tel" id="phoneNumber" 
                        value={phoneNum} className='joinipt' 
                        onChange={(e) => {
                            setPhoneNum(e.target.value); }} 
                        required></input>
                </div>

                <div className='input-box'> 
                    <label for="gender">성별</label>
                    <input type="text" id="gender" 
                        value={gender} className='joinipt' 
                        onChange={(e) => {
                            setGender(e.target.value); }} 
                        required></input>
                </div>

                <div className='input-box'> 
                    <label for="birthday">생년월일</label>
                    <div className="birth">
                        <input type="number" id="year" placeholder="년(4자)" onChange={(e) => {
                            const year = e.target.value;
                            setBirthday(year + birthday.slice(4)); }}></input>                
                        <select onChange={(e) => {
                            const month = e.target.value.padStart(2, '0');
                            setBirthday(birthday.slice(0, 4) + month + birthday.slice(6)); }}>
                            <option value="">월</option>
                            <option value="01">1월</option>
                            <option value="02">2월</option>
                            <option value="03">3월</option>
                            <option value="04">4월</option>
                            <option value="05">5월</option>
                            <option value="06">6월</option>
                            <option value="07">7월</option>
                            <option value="08">8월</option>
                            <option value="09">9월</option>
                            <option value="10">10월</option>
                            <option value="11">11월</option>
                            <option value="12">12월</option>
                        </select>
                        <input type="number" placeholder="일" onChange={(e) => {
                            const day = e.target.value.padStart(2, '0');
                            setBirthday(birthday.slice(0, 6) + day); }}></input>
                    </div>
                </div>

            </div>
            {isParent ?
               <div className='input-box code'> 
                    <label for="familyCode" id='famCode-btn'>가족코드 생성하기</label>
                    <p id="familyCode"> sample </p>   
                </div>          
            : 
            <div > 
                <label for="familyCodeInput">가족코드 입력</label>
                <input type="text" id="familyCodeInput" required></input>
            </div> 
            }
            
        </div>
        <button id="joinBtn" onClick={registerAxios}>가입하기</button>
        </div>
    );
};

export default CommonJoin;