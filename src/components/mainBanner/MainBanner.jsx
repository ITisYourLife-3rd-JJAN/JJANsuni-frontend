import { React, useState, useEffect } from 'react';
import './mainBanner.css'
import SimpleSlider from '../slider/Slider';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { checkFinalSound } from '../../lib/checkFinalSound';
import Select from 'react-select'

const MainBanner = ({ bgColor = '#CDFF5C', isParent }) => {

  const [cheerUpMsg, setCheerUpMsg] = useState("");
  const [name, setName] = useState("");
  const [children, setChildren] = useState([]); 
  const [selectedChild, setSelectedChild] = useState("");
  const [isLoading, setIsLoading] = useState(true);
    
  const userId = sessionStorage.getItem("userId");

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/message")
  };

  const cursorStyle = isParent ? { cursor: 'pointer' } : {};
  const backgroundColor = isParent ? 'rgba(252,255,92,0.4)' : null;

  const getEnding = (text) => {
    const lastTwoChars = text.slice(-2); 
    
    if(checkFinalSound(text)) return `${lastTwoChars}야`;
    else return `${lastTwoChars}아`;
  };


  useEffect(() => {
    const fetchData = () => {
      if (!isParent) {
        axios
          .get(`http://localhost:8080/api/v1/users/${userId}`)
          .then((response) => {
            console.log(response.data.data);
            setCheerUpMsg(response.data.data.cheerUpMsg);
            setName(response.data.data.name);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      } else {
        axios
          .get(`http://localhost:8080/api/v1/users/family-list/${userId}`)
          .then((response) => {
            const filteredChildren = response.data.data.filter(
                (child) => child.isParent === "F"
              );
              setChildren(filteredChildren); 
              setIsLoading(false);
            })
        .catch((error) => {
            console.log(error);
        })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    };

    fetchData();

  }, [isParent, userId]);

  const handleChildSelect = (selectedOption) => {
    setSelectedChild(selectedOption.label);
  };


  return (
    <div className='mainBanner' style={{ backgroundColor: bgColor }}>
      {isParent ? (
        <Select
          className="selectkid"
          onChange={handleChildSelect}
          options={children.map((child) => ({
              value: child.userId,
              label: child.name
          }))}
          placeholder={children.length > 0 ? children[0].name : "아이를 등록해주세요"}
          theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#E5FAFC',
                primary: '#CDFF5C',
              },
            })} 
          styles={{
              control: (provided, state) => ({
                ...provided,
                borderColor: state.isFocused ? "#CDFF5C" : "#CDFF5C",
                borderRadius: "10px", 
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#CDFF5C"
                }
              }),
              menu: (provided) => ({
                ...provided,
                marginTop: 0
              }),
              option: (provided) => ({
                ...provided,
                color: "black"
              })
            }}
          />
        ):("")
      }

      <div className='mammyMsg'>
        {isParent ? (
          children.length > 0 ? (
            <div>
              <p className='sendFighting' onClick={handleClick}>
                  작성하기
              </p>
              <p className='changeChild' onClick={isParent ? handleClick : null} style={{...cursorStyle, backgroundColor}}>
                사랑하는 {getEnding(selectedChild)} ~
              </p>
              <p>{cheerUpMsg}</p>
            </div>
          ) :  ("아이를 등록해주세요")
        ) : (
          <div>
              <p className='changeChild' onClick={isParent ? handleClick : null} style={{...cursorStyle, backgroundColor}}>
              사랑하는 {getEnding()} ~
              </p>
              <p>{cheerUpMsg}</p>
          </div>
        )}
       
        
      </div>
      <div className='slideBanner'>
        <SimpleSlider />
      </div>
    </div>
  );

};

export default MainBanner;