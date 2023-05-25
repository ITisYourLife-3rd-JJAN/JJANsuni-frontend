import React, { useState } from "react";
import "./eventForm.css";
import { useNavigate } from 'react-router-dom';

const EventForm = () => {
  const subjects = ["국어", "영어", "수학", "사회", "과학", "음악", "미술", "체육"];
  const initialSubject = subjects[0];
  const activities = ["독서", "게임", "물놀이", "등산"];
  const initialActivity = activities[0];
  const routines = ["나는 매일", "나는 매주", "나는 매월"];
  const initialRoutine = routines[0];
  const wheres = [" 게임에", " 교통비에", " 악세사리구매에", " 운동에", " 간식에"];
  const initialWhere = wheres[0];

  const [selectedActivity, setSelectedActivity] = useState(initialActivity);
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [selectedRoutine, setSelectedRoutine] = useState(initialRoutine);
  const [selectedWhere, setSelectedWhere] = useState(initialWhere);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const savingInput = document.querySelector('input[name="saving"]:checked');
    const patienceInput = document.querySelector('input[name="patience"]:checked');
    const sociabilityInput = document.querySelector('input[name="sociability"]:checked');


    if (!savingInput || !patienceInput || !sociabilityInput || !selectedSubject || !selectedActivity || !selectedRoutine || !selectedWhere || !selectedAmount) {
      let missingFields = [];
      if (!savingInput) missingFields.push('어떤 방식을 더 좋아하세요?');
      if (!patienceInput) missingFields.push('나는 끈기가 있는 편인가요?');
      if (!sociabilityInput) missingFields.push('어떻게 시간을 보내는 것을 좋아하나요?');
      if (!selectedSubject) missingFields.push('좋아하는 과목은 무엇인가요?');
      if (!selectedActivity) missingFields.push('취미가 무엇인가요?');
      if (!selectedRoutine) missingFields.push('나는 매일/매주/매월');
      if (!selectedWhere) missingFields.push('어디에');
      if (!selectedAmount) missingFields.push('원 쓰는데 나는 무슨 성향이야??');
  
      alert(`선택하지 않은 항목이 있어요😲\n\n${missingFields.join('\n')}`);
      setLoading(false);
      return;
    }

const saving = savingInput.value;
const patience = patienceInput.value;
const sociability = sociabilityInput.value;

    const requestPrompt = `${saving}
      ${patience}
      ${sociability}
      학교에서 ${selectedSubject}시간을 좋아해
      ${selectedActivity} 하는 것을 좋아해
      ${selectedRoutine} ${selectedWhere} ${selectedAmount}원 소비하는데
      어떤 방식으로 투자나 저축을 하면 좋을까? 참고로 난 이전 사람과 다른 사람이야`;

      // alert(requestPrompt);
      navigate('/event-result', { state: { requestPrompt } });
    };
  

  return (
    <>
      <div className='eventForm'>
        <div className='formBox'>            
          <form>
            <div className="question">
              어떤 방식을 더 좋아하세요?<br/>
              <input type="radio" id="bigSave" name="saving" value="나는 돈을 모아서, 갖고 싶은 비싼 물품을 사는 것을 추구해" required /> 
              <label htmlFor="bigSave">돈을 모아서 갖고 싶은 비싼 물건 사기</label><br/>
              <input type="radio" id="smallSave" name="saving" value="나는 한 번 큰 것을 사는 것보다, 매일매일 조금씩 구매하는게 좋아" required /> 
              <label htmlFor="smallSave">조금씩 자주 저렴한 물건 사기</label>
            </div>

            <div className="question">
              나는 끈기가 있는 편인가요?<br/>
              <input type="radio" id="yesPatience" name="patience" value="나는 끈기가 있는 편에 속해" required /> 
              <label htmlFor="yesPatience">예</label>
              <input type="radio" id="noPatience" name="patience" value="나는 끈기가 없는 편에 속해" required /> 
              <label htmlFor="noPatience">아니오</label>
            </div>

            <div className="question">
              어떻게 시간을 보내는 것을 좋아하나요?<br/>
              <input type="radio" id="extrovert" name="sociability" value="나는 혼자서 노는게 좋아" required /> 
              <label htmlFor="extrovert">혼자 시간을 보내는 것을 좋아해요</label><br/>
              <input type="radio" id="introvert" name="sociability" value="나는 친구들과 노는게 좋아" required /> 
              <label htmlFor="introvert">친구들과 시간을 보내는 것을 좋아해요</label>
            </div>

            <div className="question">
              좋아하는 과목은 무엇인가요?
              <select
                id="subject-select"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="국어" >국어</option>
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
                onChange={(e) => setSelectedActivity(e.target.value)}
                required
              >
                <option value="독서" >독서</option>
                <option value="게임">게임</option>
                <option value="산">등산</option>
                <option value="계곡">물놀이</option>
              </select>
            </div>

            <div className="question">
              나는 매
              <select
                id="routine-select"
                value={selectedRoutine}
                onChange={(e) => setSelectedRoutine(e.target.value)}
                required
              >
                <option value="나는 매일" >일</option>
                <option value="나는 매주">주</option>
                <option value="나는 매월">월</option>
              </select>

              <select
                id="where-select"
                value={selectedWhere}
                onChange={(e) => setSelectedWhere(e.target.value)}
                required
              >
                <option value=" 게임에" >게임</option>
                <option value=" 교통비에">교통비</option>
                <option value=" 덕질에">덕질</option>
                <option value=" 악세사리구매에">악세사리구매</option>
                <option value=" 운동에">운동</option>
                <option value=" 간식에">간식</option>
              </select>
              &nbsp;에<br/>
              <input type="number" id="howmuch" placeholder="숫자만 입력하세요" value={selectedAmount}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setSelectedAmount(value >= 1 ? value : "");
                }} required />
              원 쓰는데 나는 무슨 성향이야??
            </div>

            <div className="submitBtn" onClick={handleSubmit}>
              <img src={`${process.env.PUBLIC_URL}/assets/images/event/letsgo.png`} alt='' className="letsgo" style={{ zIndex: 100 }} />
              <img src={`${process.env.PUBLIC_URL}/assets/images/event/piggy.png`} alt='' className="letsgo" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventForm;
