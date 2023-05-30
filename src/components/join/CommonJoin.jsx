import {React, useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
            setEmailMessage("이메일 형식으로 입력해주세요.");
            setIsEmail(false);
        } else {
            setEmailMessage("올바른 양식이에요.");
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
                setPhoneNumMessage("전화번호 양식을 확인해주세요");
                setIsPhone(false);
        } else {
                setPhoneNumMessage("올바른 양식이에요");
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
                console.log(response);
                console.log(response.data);
                if(response.status === 200){
                    alert("사용 가능한 이메일이에요👌")
                    setEmailExistCheck(true)
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                alert("이미 존재하는 이메일이에요😥")
            })
    }
    
    const generateFamilyCodeAxios = () => {
        axios
            .get("http://localhost:8080/api/v1/users/family-code")
            .then((response) => {
                console.log(response);
                //console.log(response.data);
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
                console.log(response);
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
            let age = currentDate.getFullYear() - birthdayDate.getFullYear();
            const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate())) {
              age--;
            }
            if (role==="F" && age >= 19) {
                setTooOld(true);
            }else if(role==="T" && age<19){
                setTooYoung(true);
            }else {
                setTooOld(false);
                setTooYoung(false);
            }
            console.log(age);
            };
            
            useEffect(() => {
                calculateAge();
              }, [birthday]);
              
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
                alert('만 19세 미만인 사용자만 자녀로 등록할 수 있어요👶');
            }else if(tooYoung){
                alert('만 19세 이상인 사용자만 부모로 등록할 수 있어요🙍‍♂️');
            }else if(!isEmail) {
                alert('이메일 양식으로 수정해 주세요⛏️');
            }else if(!isPassword) {
                alert('비밀번호를 더 복잡하게 설정해주세요.🔒');
            }else if(!passwordMatch) {
                alert('비밀번호 확인란을 동일하게 작성해주세요🔑');
            }else if(!isPhone) {
                alert('01012345678 양식으로 수정해주세요.👀');
            }
        };

        const checkPlease = () => {
            if(emailExistCheck){
                if(!famcodeCheck){
                    alert("가족코드 발급 또는 인증이 필요해요🖨️")
                }
            }else{
                alert("이메일 중복확인을 진행해주세요✉️")
            }
        }

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
                            <label htmlFor="birthday">생년월일</label>
                            <div className="birth">
                                <select className="select-box y" onChange={(e) => {
                                const year = e.target.value;
                                setBirthday(year + birthday.slice(4));
                                }}>
                                <option value="">년</option>
                                {(() => {
                                    const currentYear = new Date().getFullYear();
                                    const minYear = 1950; // 최소 연도값
                                    const maxYear = 2023; // 최대 연도값
                                    const yearOptions = [];

                                    for (let i = maxYear; i >= minYear; i--) {
                                    yearOptions.push(
                                        <option value={i} key={i}>
                                        {i}년
                                        </option>
                                    );
                                    }
                                    return yearOptions;
                                })()}
                                </select>

                                <select className="select-box" onChange={(e) => {
                                const month = e.target.value.padStart(2, '0');
                                setBirthday(birthday.slice(0, 4) + month + birthday.slice(6));
                                }}>
                                <option value="">월</option>
                                {(() => {
                                    const monthOptions = [];

                                    for (let i = 1; i <= 12; i++) {
                                    const paddedMonth = i.toString().padStart(2, '0');
                                    monthOptions.push(
                                        <option value={paddedMonth} key={paddedMonth}>
                                        {i}월
                                        </option>
                                    );
                                    }
                                    return monthOptions;
                                })()}
                                </select>

                                <select className="select-box" onChange={(e) => {
                                const day = e.target.value;
                                setBirthday(birthday.slice(0, 6) + day);
                                }}>
                                <option value="">일</option>
                                {(() => {
                                    const dayOptions = [];

                                    for (let i = 1; i <= 31; i++) {
                                    const paddedDay = i.toString().padStart(2, '0');
                                    dayOptions.push(
                                        <option value={paddedDay} key={paddedDay}>
                                        {i}일
                                        </option>
                                    );
                                    }

                                    return dayOptions;
                                })()}
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
        
        {/* 둘 중 하나라도 미확인 시 */}
        {!(emailExistCheck&&famcodeCheck) && <button className="joinBtn2" onClick = {checkPlease}>가입하기</button>}
        {/* 이메일 및 가족코드 확인 버튼 완료 시 */}
        {(emailExistCheck&&famcodeCheck) && <button className="joinBtn" onClick = {registerAxios}>가입하기</button>}
        <Link to = {"/login"}><p id="RegisterText">이미 가입되어 있으신가요?</p></Link>

        </div>
    );
};

export default CommonJoin;