import React, { useState } from "react";
import "./eventForm.css";
import { useNavigate } from 'react-router-dom';

const EventForm = () => {
const subjects = ["Korean", "English", "Math", "Social Studies", "Science", "Music", "Art", "Physical Education"];
const initialSubject = subjects[0];
const activities = ["reading", "gaming", "swimming", "hiking"];
const initialActivity = activities[0];
const routines = ["I do it every day", "I do it every week", "I do it every month"];
const initialRoutine = routines[0];
const wheres = ["on games", "on transportation", "on buying accessories", "on exercising", "on snacks"];
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
    I enjoy my ${selectedSubject} class at school.
    I enjoy ${selectedActivity}.
    ${selectedRoutine} ${selectedAmount} won ${selectedWhere}.
    What would be a good way for me to invest or save money?
    Never mind the previous questions that I made.
    Respond me in korean please~`;

      alert(requestPrompt);
      navigate('/event-result', { state: { requestPrompt } });
    };
  

  return (
    <>
      <div className='eventForm'>
        <div className='formBox'>            
          <form>
            <div className="question">
              어떤 방식을 더 좋아하세요?<br/>
              <input type="radio" id="bigSave" name="saving" value="I prefer saving money to buy expensive items I want" required /> 
              <label htmlFor="bigSave">돈을 모아서 갖고 싶은 비싼 물건 사기</label><br/>
              <input type="radio" id="smallSave" name="saving" value="I prefer making small purchases frequently rather than buying something big at once" required /> 
              <label htmlFor="smallSave">조금씩 자주 저렴한 물건 사기</label>
            </div>

            <div className="question">
              나는 끈기가 있는 편인가요?<br/>
              <input type="radio" id="yesPatience" name="patience" value="Yes, I have patience" required /> 
              <label htmlFor="yesPatience">예</label>
              <input type="radio" id="noPatience" name="patience" value="No, I lack patience" required /> 
              <label htmlFor="noPatience">아니오</label>
            </div>

            <div className="question">
              어떻게 시간을 보내는 것을 좋아하나요?<br/>
              <input type="radio" id="extrovert" name="sociability" value="I enjoy spending time alone" required /> 
              <label htmlFor="extrovert">혼자 시간을 보내는 것을 좋아해요</label><br/>
              <input type="radio" id="introvert" name="sociability" value="I enjoy spending time with friends" required /> 
              <label htmlFor="introvert">친구들과 시간을 보내는 것을 좋아해요</label>
            </div>

            <div className="question">
              좋아하는 과목은 무엇인가요?
              <select
                id="subject-select"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="Korean" >국어</option>
                <option value="English">영어</option>
                <option value="Math">수학</option>
                <option value="Social Studies">사회</option>
                <option value="Science">과학</option>
                <option value="Music">음악</option>
                <option value="Art">미술</option>
                <option value="Physical Education">체육</option>
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
                <option value="reading" >독서</option>
                <option value="gaming">게임</option>
                <option value="hiking">등산</option>
                <option value="swimming">물놀이</option>
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
                <option value="I spend everyday" >일</option>
                <option value="I spend every week">주</option>
                <option value="I spend every month">월</option>
              </select>

              <select
                id="where-select"
                value={selectedWhere}
                onChange={(e) => setSelectedWhere(e.target.value)}
                required
              >
                <option value="on game" >게임</option>
                <option value="on traffic fee">교통비</option>
                <option value="on fangirling">덕질</option>
                <option value="on buying accesories">악세사리구매</option>
                <option value="on work out">운동</option>
                <option value="on snacks">간식</option>
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
