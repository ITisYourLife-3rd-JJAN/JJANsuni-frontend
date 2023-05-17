import React from 'react';

const CommonJoin = ({isParent}) => {

    return (
        <div className='join-container'>
        <div className='aa'>
            <div >
                <div className='input-box'> 
                    <label for="username">이름 {isParent}</label>
                    <input type="text" id="username" required></input>
                </div>

                <div className='input-box'> 
                    <label for="email">이메일</label>
                    <div className='email-box'>
                        <input type="email" id="email" required />

                        <button id="existBtn">중복확인</button>
                    </div>
                </div>
               
                
                <div className='input-box'> 
                <label for="userpw">비밀번호</label>
                <input type="password" id="userpw" required></input>
                </div>

                <div className='input-box'> 
                    <label for="userpwCheck">비밀번호 확인</label>
                    <input type="password" id="userpwCheck" required></input>
                </div>

                <div className='input-box'> 
                    <label for="phoneNumber">전화번호</label>
                    <input type="tel" id="phoneNumber" required></input>
                </div>

                <div className='input-box'> 
                    <label for="gender">성별</label>
                    <input type="text" id="gender" required></input>
                </div>

                <div className='input-box'> 
                    <label for="birthday">생년월일</label>
                    <div className="birth">
                        <input type="number" id="birthday" placeholder="년(4자)"></input>                
                        <select>
                            <option value="">월</option>
                            <option value="">1월</option>
                            <option value="">2월</option>
                            <option value="">3월</option>
                            <option value="">4월</option>
                            <option value="">5월</option>
                            <option value="">6월</option>
                            <option value="">7월</option>
                            <option value="">8월</option>
                            <option value="">9월</option>
                            <option value="">10월</option>
                            <option value="">11월</option>
                            <option value="">12월</option>
                        </select>
                        <input type="number" placeholder="일"></input>
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
        <button id="joinBtn">가입하기</button>
        </div>
    );
};

export default CommonJoin;