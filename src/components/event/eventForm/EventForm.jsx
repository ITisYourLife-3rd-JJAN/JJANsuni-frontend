import React, { useState } from "react";
import axios from "axios";
import "./eventForm.css";

const EventForm = () => {
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedRoutine, setSelectedRoutine] = useState("");
  const [selectedWhere, setSelectedWhere] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const saving = document.querySelector(
      'input[name="saving"]:checked'
    ).value;
    const patience = document.querySelector(
      'input[name="patience"]:checked'
    ).value;
    const sociability = document.querySelector(
      'input[name="sociability"]:checked'
    ).value;

    const requestPrompt = `번호를 매겨서 알려줘
      ${saving}
      ${patience}
      ${sociability}
      학교에서 ${selectedSubject}시간을 좋아해
      ${selectedActivity} 하는 것을 좋아해
      ${selectedRoutine} ${selectedWhere} ${selectedAmount}원 소비하는데
      어떤 방식으로 투자나 저축을 하면 좋을까?`;
      alert(requestPrompt);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt: requestPrompt,
          temperature: 0.5,
          max_tokens: 3000,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setApiResponse(response.data.choices[0].text);
    } catch (e) {
      console.error(e);
      setApiResponse("Something is going wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
    
    return (
        <>
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
                        onChange={(e) => setSelectedSubject(e.target.value)}
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
                    onChange={(e) => setSelectedActivity(e.target.value)}
                    >
                    <option value="독서">독서</option>
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
                    >
                    <option value="나는 매일">일</option>
                    <option value="나는 매주">주</option>
                    <option value="나는 매월">월</option>
                    </select>

                    <select
                    id="where-select"
                    value={selectedWhere}
                    onChange={(e) => setSelectedWhere(e.target.value)}
                    >
                    <option value=" 게임에">게임</option>
                    <option value=" 교통비에">교통비</option>
                    <option value=" 덕질에">덕질</option>
                    </select>
                    &nbsp;에<br/>
                    <input type="number" id="howmuch" placeholder="숫자만 입력하세요"value={selectedAmount}
                    onChange={(e) => setSelectedAmount(e.target.value)}/>원
                    쓰는데 나는 무슨 성향이야??
                </div>
            </form>
            </div>
            {/* submit 버튼 만들어야함 */}
            <div className="submitBtn" onClick={handleSubmit}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/event/letsgo.png`} alt='' className="letsgo"  style={{zIndex:100}}/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/event/piggy.png`} alt='' className="letsgo"/></div>
        {/* API 응답 */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        apiResponse && (
          <div>
            <pre>
              <strong>API response:</strong>
              {apiResponse}
            </pre>
          </div>
        )
      )}
    </div>
    </>
  );
};
export default EventForm;