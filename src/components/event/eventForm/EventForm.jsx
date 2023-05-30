import React, { useState } from "react";
import "./eventForm.css";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

const EventForm = () => {

  const [selectedActivity, setSelectedActivity] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const [selectedRoutine, setSelectedRoutine] = useState();
  const [selectedWhere, setSelectedWhere] = useState();
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

      navigate('/event-result', { state: { requestPrompt } });
    };

  return (
    <div className="event-gpt-container">
      <div className='eventForm'>
        <div className='form-container'>  
         <div className="form-box">
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
              <Select
                id="subject-select"
                value={selectedSubject ? { value: selectedSubject, label: selectedSubject } : null}
                onChange={(selectedOption) => setSelectedSubject(selectedOption.label)}
                options={[
                  { value: "Korean", label: "국어" },
                  { value: "English", label: "영어" },
                  { value: "Math", label: "수학" },
                  { value: "Social Studies", label: "사회" },
                  { value: "Science", label: "과학" },
                  { value: "Music", label: "음악" },
                  { value: "Art", label: "미술" },
                  { value: "Physical Education", label: "체육" }
                ]}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                      ...theme.colors,
                      primary25: '#E5FAFC',
                      primary: '#F4C4D2',
                  },
                })}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    borderColor: state.isFocused ? '#F4C4D2' : '#F4C4D2',
                    borderRadius: "10px", 
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: '#F4C4D2'
                    },
                    width: '20rem'
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    cursor: "pointer"
                  })
                }}
              />

            </div>

            <div className="question">
              취미가 무엇인가요?
              <Select
                id="activity-select"
                value={selectedActivity ? { value: selectedActivity, label: selectedActivity } : null}
                onChange={(selectedOption) => setSelectedActivity(selectedOption.label)}
                options={[
                  { value: "reading", label: "독서" },
                  { value: "gaming", label: "게임" },
                  { value: "hiking", label: "등산" },
                  { value: "swimming", label: "물놀이" }
                ]}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                      ...theme.colors,
                      primary25: '#E5FAFC',
                      primary: '#F4C4D2',
                  },
                })}
                required
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    borderColor: state.isFocused ? '#F4C4D2' : '#F4C4D2',
                    borderRadius: "10px", 
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: '#F4C4D2'
                    },
                    width: '20rem'
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    cursor: "pointer"
                  })
                }}
              />
            </div>

            <div className="question">
              <div className="flex-q">
                나는 매
                <Select
                  id="routine-select"
                  value={selectedRoutine ? { value: selectedRoutine, label: selectedRoutine } : null}
                  defaultValue={{ value: 'I spend everyday', label: '일' }}
                  onChange={(selectedOption) => setSelectedRoutine(selectedOption.label)}
                  options={[
                    { value: "I spend everyday", label: "일" },
                    { value: "I spend every week", label: "주" },
                    { value: "I spend every month", label: "월" }
                  ]}
                  required
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: state.isFocused ? '#F4C4D2' : '#F4C4D2',
                      borderRadius: "10px", 
                      boxShadow: "none",
                      "&:hover": {
                        borderColor: '#F4C4D2'
                      },
                      width: '7rem'
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      cursor: "pointer"
                    })
                  }}
                />

                <Select
                  id="where-select"
                  value={selectedWhere ? { value: selectedWhere, label: selectedWhere } : null}
                  onChange={(selectedOption) => setSelectedWhere(selectedOption.label)}
                  options={[
                    { value: "on game", label: "게임" },
                    { value: "on traffic fee", label: "교통비" },
                    { value: "on fangirling", label: "덕질" },
                    { value: "on buying accessories", label: "악세사리 구매" },
                    { value: "on work out", label: "운동" },
                    { value: "on snacks", label: "간식" }
                  ]}
                  required
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: state.isFocused ? '#F4C4D2' : '#F4C4D2',
                      borderRadius: "10px", 
                      boxShadow: "none",
                      "&:hover": {
                        borderColor: '#F4C4D2'
                      },
                      width: '20rem'
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      cursor: "pointer"
                    })
                  }}
                />

                &nbsp;에<br/>
              </div>
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
      </div>
    </div>
  );
};

export default EventForm;
