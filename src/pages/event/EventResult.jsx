import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import EggBreak from "./../../components/event/eventResult/EggBreak"
import './eventResult.css';

const EventResult = () => {
  const location = useLocation();
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (location.state && location.state.requestPrompt) {
      setPrompt(location.state.requestPrompt);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 3500,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setApiResponse(formatApiResponse(response.data.choices[0].text));

    } catch (e) {
      console.error(e);
      setApiResponse("Something is going wrong. Please try again.");
    }
    setLoading(false);
    setIsButtonClicked(true);
  };

  const formatApiResponse = (text) => {
    const formattedText = text.replace(/\.\s/g, ".\n");
     return formattedText;
  };

  let buttonText;
  if (loading) {
    buttonText = "답변 기다리는중...";
  } else if (isButtonClicked) {
    buttonText = "답변 완료";
  } else {
    buttonText = "답변 받아오기";
  }

  return (
    <>
      <div>
        <div className="buttonContainer">
          <button
            disabled={loading || prompt.length === 0 }
            type="submit"
            className="generateBtn"
            onClick={handleSubmit}
          >
            {buttonText}
          </button>
        </div>
        <div className="eggContainer">
          <div className="eggBreakBox">
            <EggBreak/>
          </div>
          {isButtonClicked && (
            <div className="apiResponseBox">
                <h2>GPT의 답변:</h2>
                {apiResponse}
                <img src={`${process.env.PUBLIC_URL}/assets/images/event/comGPT.png`} className="comGPT" alt='' />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventResult;
