import React, { useState } from 'react';
import './eventForm.css';



const EventForm = () => {

    const [selectedActivity, setSelectedActivity] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedRoutine, setSelectedRoutine] = useState('');
    const [selectedWhere, setSelectedWhere] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        // const message = `선택한 값들:\n
        //             ${event.target.saving.value}\n
        //             ${event.target.patience.value}\n
        //             ${event.target.sociability.value}\n
        //             ${selectedSubject}\n
        //             ${selectedActivity}`;
        alert("제출완료");
        // form 데이터를 서버에 전송하거나 다른 처리를 수행합니다.
    }
    return (
        <div className='eventForm'>
            <div className='formBox'>            
            <form>
                <div className="question">
                    어떤 방식을 더 좋아하세요?<br/>
                    <input type="radio" id="bigSave" name="saving" value="나는 돈을 모아서, 갖고 싶은 비싼 물품을 사는 것을 추구해"
                    /> 
                    <label htmlFor="bigSave">돈을 모아서 갖고 싶은 비싼 물건 사기</label><br/>
                    <input type="radio" id="smallSave" name="saving" value="나는 한 번 큰 것을 사는 것보다, 매일매일 조금씩 구매하는게 좋아"
                    /> 
                    <label htmlFor="smallSave">조금씩 자주 저렴한 물건 사기</label>
                </div>

                <div className="question">
                    나는 끈기가 있는 편인가요?<br/>
                    <input type="radio" id="yesPatience" name="patience" value="나는 끈기가 있는 편에 속해"
                    /> 
                    <label htmlFor="yesPatience">예</label>
                    <input type="radio" id="noPatience" name="patience" value="나는 끈기가 없는 편에 속해"
                    /> 
                    <label htmlFor="noPatience">아니오</label>
                </div>

                <div className="question">
                    어떻게 시간을 보내는 것을 좋아하나요?<br/>
                    <input type="radio" id="extrovert" name="sociability" value="나는 혼자서 노는게 좋아"
                    /> 
                    <label htmlFor="extrovert">혼자 시간을 보내는 것을 좋아해요</label><br/>
                    <input type="radio" id="introvert" name="sociability" value="나는 친구들과 노는게 좋아"
                    /> 
                    <label htmlFor="introvert">친구들과 시간을 보내는 것을 좋아해요</label>
                </div>

                <div className="question">
                좋아하는 과목은 무엇인가요?
                    <select
                        id="subject-select"
                        value={selectedSubject}
                        onChange={(event) => setSelectedSubject(event.target.value)}
                        >
                        <option value="국어">국어</option>
                        <option value="영어">영어</option>
                        <option value="수학">수학</option>
                        <option value="사회">사회</option>
                        <option value="과학">과학</option>
                        <option value="음악">음악</option>
                        <option value="미술">미술</option>
                        <option value="체육">체육</option>
                    </select>
                </div>
                <div className="question">
                취미가 무엇인가요?
                    <select
                    id="activity-select"
                    name="activity"
                    value={selectedActivity}
                    onChange={(event) => setSelectedActivity(event.target.value)}
                    >
                    <option value="독서">독서</option>
                    <option value="게임">게임</option>
                    <option value="산">산</option>
                    <option value="계곡">계곡</option>
                    </select>
                </div>
                <div className="question">
                    나는 매
                    <select
                    id="routine-select"
                    value={selectedRoutine}
                    onChange={(event) => setSelectedRoutine(event.target.value)}
                    >
                    <option value="나는 매일">일</option>
                    <option value="나는 매주">주</option>
                    <option value="나는 매월">월</option>
                    </select>

                    <select
                    id="where-select"
                    value={selectedWhere}
                    onChange={(event) => setSelectedWhere(event.target.value)}
                    >
                    <option value=" 게임에">게임</option>
                    <option value=" 교통비에">교통비</option>
                    <option value=" 덕질에">덕질</option>
                    </select>
                    &nbsp;에<br/>
                    <input type="number" id="howmuch" placeholder="숫자만 입력하세요"/>원
                    쓰는데 나는 무슨 성향이야??
                </div>
            </form>
            </div>
            {/* submit 버튼 만들어야함 */}
            <div className="submitBtn" onClick={handleSubmit}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/event/letsgo.png`} alt='' className="letsgo"  style={{zIndex:100}}/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/event/piggy.png`} alt='' className="letsgo"/></div>
        </div>
    );
};

export default EventForm;