import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CommonJoin = ({isParent}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [famCode, setFamCode] = useState("");
    const role = isParent ? "T" : "F";
    const navigate = useNavigate();
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [emailExistCheck, setEmailExistCheck] = useState(false);
    const [famcodeCheck, setFamcodeCheck] = useState(false);
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [phoneNumMessage, setPhoneNumMessage] = useState("");
    const [isPassword, setIsPassword] = useState();
    const [isEmail, setIsEmail] = useState();
    const [isPhone, setIsPhone] = useState();
    const [tooOld, setTooOld] = useState(false);
    const [tooYoung, setTooYoung] = useState(false);

    const onChangeEmail = (email) => {
        const emailRegExp =
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if (!emailRegExp.test(email)) {
            setEmailMessage("이메일 양식으로 입력해주세요.");
            setIsEmail(false);
        } else {
            setEmailMessage("올바른 이메일 양식이에요.");
            setIsEmail(true);
        }
    };
    
    const onChangePassword = (password) => {
        setPassword(password);
        const passwordRegExp =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(password)) {
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
                );
                setIsPassword(false);
            } else {
                setPasswordMessage("안전한 비밀번호에요.");
                setIsPassword(true);
            }
        };
        
        const onChangePhone = (phoneNum) => {
            setPhoneNum(phoneNum);
            const phoneRegExp = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
            if (!phoneRegExp.test(phoneNum)) {
                setPhoneNumMessage("올바른 전화번호 양식이 아니에요");
                setIsPhone(false);
            } else {
                setPhoneNumMessage("올바른 전화번호 양식이에요");
                setIsPhone(true);
            }
        };
        
        useEffect(() => {
          setPasswordMatch(password === passwordCheck);
        }, [passwordCheck]);

        
        const emailExistAxios = () => {
            axios
            .post("http://localhost:8080/api/v1/users/email-check", {
                email : email
            })
            .then((response) => {
                if(response.status === 200){
                    alert("사용 가능한 email이에요🤚")
                    setEmailExistCheck(true)
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                alert("이미 존재하는 email이에요😥")
            })
        }
        
        const generateFamilyCodeAxios = () => {
            axios
            .get("http://localhost:8080/api/v1/users/family-code")
            .then((response) => {
                if(response.status === 200){
                    setFamCode(response.data.item.famCode);
                    alert("가족코드가 생성되었어요.👨‍👨‍👧‍👦")
                    setFamcodeCheck(true);
                }
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        }
        
        const familyCodeCheckAxios = () => {
            axios
            .get(`http://localhost:8080/api/v1/users/check/${famCode}`)
            .then((response) => {
                if(response.status === 200){
                    alert("가족코드가 확인되었어요.👨‍👧")
                    setFamcodeCheck(true);
                }
            })
            .catch((error) => {
                console.log(error.response);
                alert("가족코드를 다시 확인해주세요.😿")
            })
        }

        const calculateAge = () => {
            
            const currentDate = new Date();
            const selectedYear = parseInt(birthday.slice(0, 4));
            const selectedMonth = parseInt(birthday.slice(4, 6)); 
            const selectedDay = parseInt(birthday.slice(6, 8));
            const birthdayDate = new Date(selectedYear, selectedMonth, selectedDay);
            
            // 현재 나이 계산
            const age = currentDate.getFullYear() - birthdayDate.getFullYear();

            if (role==="F" && age >= 19) {
                setTooOld(true);
            }else if(role==="T" && age<19){
                setTooYoung(true);
            }else {
                setTooOld(false);
                setTooYoung(false);
            }
            };
        
        const registerAxios = () => {
            console.log(tooOld+"axios")
            console.log(tooYoung+"axios")
            if ((!tooOld)&&(!tooYoung)&&passwordMatch&&isEmail&&isPassword&&isPhone) {
                axios
                .post('http://localhost:8080/api/v1/users/join', {
                    name: username,
                    email: email,
                    password: password,
                    phoneNum: phoneNum,
                    gender: gender,
                    birthday: birthday,
                    famCode: famCode,
                    isParent: role
                })
                .then((response) => { 
                    alert('회원가입에 성공했어요✨');
                if (response.data.status === "201") {
                        return navigate('/login');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }else if(tooOld){
                alert('만 19세 미만인 사용자만 자녀로 등록할 수 있어요');
            }else if(tooYoung){
                alert('만 19세 이상인 사용자만 부모로 등록할 수 있어요');
            }else if(!isEmail) {
                alert('email 형식으로 맞추어 주세요😟');
            }else if(!isPassword) {
                alert('비밀번호를 더 복잡하게 설정해주세요.😟');
            }else if(!passwordMatch) {
                alert('비밀번호 확인란을 동일하게 작성해주세요😟');
            }else if(!isPhone) {
                alert('휴대폰번호 형식을 맞추어주세요.😟');
                //setPhoneNum("")
            }
        };
        
        return (
        <div className='join-wrap'>
        <div className='join-box'>
            <div>
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
                                    onChangeEmail(e.target.value);
                                    setEmail(e.target.value); }} 
                                    required />
                        <button id="existBtn" onClick={emailExistAxios}>중복확인</button>
                    </div>
                    <p className={`message ${!isEmail && "wrong"}`}>{emailMessage}</p> 
                </div>
        
                <div className='input-box'> 
                    <label for="userpw">비밀번호</label>
                    <input type="password" id="userpw" className='joinipt joinpw'
                        value={password} 
                        onChange={(e) => {
                            onChangePassword(e.target.value);
                            setPassword(e.target.value); }} 
                        required/>
                </div>
                <p className={`message ${!isPassword && "wrong"}`}>{passwordMessage}</p>
                <div className='input-box'>
                    <label htmlFor='userpwCheck'>비밀번호 확인</label>
                    <input
                    type='password'
                    id='userpwCheck'
                    className='joinipt joinpw'
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    required
                    />
                </div>
                {!passwordMatch && <p id='passwordCheck-Text'>비밀번호가 일치하지 않습니다.</p>}


                <div className='input-box'> 
                    <label for="phoneNumber">전화번호</label>
                    <input type="tel" id="phoneNumber" 
                        value={phoneNum} className='joinipt' 
                        onChange={(e) => {    
                            onChangePhone(e.target.value);
                            setPhoneNum(e.target.value); }} 
                        required></input>
                    <p className={`message ${!isPhone && "wrong"}`}>{phoneNumMessage}</p>
                </div>

                <div className='input-box'>
                <label htmlFor="gender">성별</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                id="gender"
                                value="F"
                                checked={gender === "F"}
                                className="gender-radio"
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                                required
                            />
                            여자
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="gender"
                                value="M"
                                checked={gender === "M"}
                                className="gender-radio"
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                                required
                            />
                            남자
                        </label>
                        </div>
                        </div>

                <div> 
                    <label for="birthday">생년월일</label>
                    <div className="birth">
                        <select className='select-box y' onChange={(e) => {
                            const year = e.target.value;
                            setBirthday(year + birthday.slice(4));
                        }}>
                            <option value="">년</option>
                            <option value="2020">2020년</option>
                            <option value="2019">2019년</option>
                            <option value="2018">2018년</option>
                            <option value="2018">2017년</option>
                            <option value="2016">2016년</option>
                            <option value="2015">2015년</option>
                            <option value="2014">2014년</option>
                            <option value="2013">2013년</option>
                            <option value="2012">2012년</option>
                            <option value="2011">2011년</option>
                            <option value="2010">2010년</option>
                            <option value="2009">2009년</option>
                            <option value="2008">2008년</option>
                            <option value="2007">2007년</option>
                            <option value="2006">2006년</option>
                            <option value="2005">2005년</option>
                            <option value="2004">2004년</option>
                            <option value="2003">2003년</option>
                            <option value="2002">2002년</option>
                            <option value="2001">2001년</option>
                            <option value="2000">2000년</option>
                            <option value="1999">1999년</option>
                            <option value="1998">1998년</option>
                            <option value="1997">1997년</option>
                            <option value="1996">1996년</option>
                            <option value="1995">1995년</option>
                            <option value="1994">1994년</option>
                            <option value="1993">1993년</option>
                            <option value="1992">1992년</option>
                            <option value="1991">1991년</option>
                            <option value="1990">1990년</option>
                            <option value="1989">1989년</option>
                            <option value="1988">1988년</option>
                            <option value="1987">1987년</option>
                            <option value="1986">1986년</option>
                            <option value="1985">1985년</option>
                            <option value="1984">1984년</option>
                            <option value="1983">1983년</option>
                            <option value="1982">1982년</option>
                            <option value="1981">1981년</option>
                            <option value="1980">1980년</option>
                        </select>            
                        <select className='select-box' onChange={(e) => {
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
                        <select className='select-box' onChange={(e) => {
                            const day = e.target.value;
                            setBirthday(birthday.slice(0, 6) + day);
                        }}>
                            <option value="">일</option>
                            <option value="01">1일</option>
                            <option value="02">2일</option>
                            <option value="03">3일</option>
                            <option value="04">4일</option>
                            <option value="05">5일</option>
                            <option value="06">6일</option>
                            <option value="07">7일</option>
                            <option value="08">8일</option>
                            <option value="09">9일</option>
                            <option value="10">10일</option>
                            <option value="11">11일</option>
                            <option value="12">12일</option>
                            <option value="13">13일</option>
                            <option value="14">14일</option>
                            <option value="15">15일</option>
                            <option value="16">16일</option>
                            <option value="17">17일</option>
                            <option value="18">18일</option>
                            <option value="19">19일</option>
                            <option value="20">20일</option>
                            <option value="21">21일</option>
                            <option value="22">22일</option>
                            <option value="23">23일</option>
                            <option value="24">24일</option>
                            <option value="25">25일</option>
                            <option value="26">26일</option>
                            <option value="27">27일</option>
                            <option value="28">28일</option>
                            <option value="29">29일</option>
                            <option value="30">30일</option>
                            <option value="31">31일</option>
                        </select>
                    </div>
                </div>

            </div>
            {isParent ?
               <div className='input-box code'> 
                    <label for="familyCode" id='famCode-btn' onClick={generateFamilyCodeAxios}>가족코드 생성하기</label>
                    <p id="familyCode"> {famCode} </p>   
                </div>          
            : 
            <div className='input-box'> 
                <label for="familyCodeInput" >가족코드 입력</label>
                <div class='famCode-box'>
                <input type="text" id="familyCodeInput" className='joinipt' value={famCode} 
                                onChange={(e) => {
                                    setFamCode(e.target.value); }}  required></input>
                 <button id="famCodeExist-btn" onClick={familyCodeCheckAxios}>확인</button>
                </div>
            </div> 
            }
            
        </div>
        <button className="joinBtn" disabled={!(emailExistCheck&&famcodeCheck)} onClick = { () => {calculateAge(); registerAxios(); }}>가입하기</button>
        </div>
    );
};

export default CommonJoin;