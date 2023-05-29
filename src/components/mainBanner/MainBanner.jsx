import { React, useState, useEffect } from 'react';
import './mainBanner.css'
import SimpleSlider from '../slider/Slider';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { checkFinalSound } from '../../lib/checkFinalSound';
import Select from 'react-select'
import Loading from '../../lib/Loading'

const MainBanner = ({ bgColor = '#CDFF5C', isParent }) => {

  const [cheerUpMsg, setCheerUpMsg] = useState("");
  const [name, setName] = useState("");
  const [children, setChildren] = useState([]); 
  const [selectedChildName, setSelectedChildName] = useState("");
  const [selectedChildId, setSelectedChildId] = useState();

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
            setIsLoading(false)
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
    setSelectedChildName(selectedOption.label);
    setSelectedChildId(selectedOption.value);
    getMsg(selectedOption.value); 
  };

  const getMsg = (userId) => {
    axios
        .get(`http://localhost:8080/api/v1/users/${userId}`)
        .then((response) => {
          setCheerUpMsg(response.data.data.cheerUpMsg);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className='mainBanner' style={{ backgroundColor: bgColor }}>
      {isParent ? (
        <div>
          <img alt='' src={`${process.env.PUBLIC_URL}/assets/images/msg-img.png`} width={160}/>
          <Select
            className="selectkid"
            onChange={handleChildSelect}
            options={children.map((child) => ({
                value: child.userId,
                label: child.name
            }))}
            placeholder={children.length > 0 ? "아이를 선택해주세요💛" : "아이를 등록해주세요💛"}
            theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#E5FAFC',
                  primary: 'rgba(252,255,92)',
                },
              })} 
            styles={{
                control: (provided, state) => ({
                  ...provided,
                  borderColor: state.isFocused ? 'rgba(252,255,92)' : 'rgba(252,255,92)',
                  borderRadius: "10px", 
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: 'rgba(252,255,92)'
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
        </div>
        ):("")
      }

      <div className='mammyMsg'>
        {isParent ? (
          children.length > 0 ? (
            <div>
              <p className='sendFighting' onClick={handleClick}>
                  작성하기
              </p>
              {selectedChildName &&  
                <div>
                  <p className='changeChild' onClick={isParent ? handleClick : null} style={{...cursorStyle, backgroundColor}}>
                    사랑하는 {getEnding(selectedChildName)} ~
                  </p>
                  <p>{cheerUpMsg}</p>
                </div>
              }
            </div>
          ) :  ("아이를 등록해주세요")
        ) : (
          <div>
              <p className='changeChild' onClick={isParent ? handleClick : null} style={{...cursorStyle, backgroundColor}}>
              사랑하는 {getEnding(name)} ~
              </p>
              <p>{cheerUpMsg}</p>
          </div>
        )}
       
        
      </div>
      <div className='slideBanner'>
        <SimpleSlider selectedChildName={selectedChildName} selectedChildId={selectedChildId} isParent={isParent} />
      </div>
    </div>
  );

};

export default MainBanner;