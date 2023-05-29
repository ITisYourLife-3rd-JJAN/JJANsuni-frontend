import { React, useEffect, useState } from 'react';
import '../pages/css/message.css'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Select from 'react-select'
import Header from '../components/header/Header';
import Loading from '../lib/Loading';

const Message = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const [selectedChild, setSelectedChild] = useState("");
    const [children, setChildren] = useState([]); 
    const [messageText, setMessageText] = useState(""); 
    const [isLoading, setIsLoading] = useState(true);
    const userId = sessionStorage.getItem("userId")

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const getChildrens = () => {
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
        };
        getChildrens();
    }, []);

    const handleChildSelect = (selectedOption) => {
        setSelectedChild(selectedOption.value);
        checkButtonDisabled(selectedOption.value, messageText);
      };
    
    const handleMessageChange = (event) => {
        setMessageText(event.target.value);
        checkButtonDisabled(selectedChild, event.target.value); 
    };
    
    const checkButtonDisabled = (selectedChild, messageText) => {
        if (selectedChild !== "" && messageText !== "") {
            setIsButtonDisabled(false); 
        } else {
            setIsButtonDisabled(true);
        }
    };
    
    const handleSendMessage = () => {
        axios
            .patch("http://localhost:8080/api/v1/users/cheer-up", {
                userId: selectedChild,
                cheerUpMsg : messageText
            })
            .then((response) => {
                console.log(response.data);
                alert(response.data.message);
                navigate("/parent")
            })
            .catch((error) => {
                console.log(error);
            })
    };

    if(isLoading) return <Loading/>;
    
    return (
        <div className='msgmain'>
            <Header/>
            <div className='msgbox'>
                <div className='msgtitlebox'>
                    <div className='msgtitle'>우리 아이에게 힘이 되는 응원을 보내주세요❣️</div>
                    <img onClick={handleGoBack} className='quitbtn' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt=""/>
                </div>
                <div>
                <Select
                    className="msgkid"
                    onChange={handleChildSelect}
                    options={children.map((child) => ({
                        value: child.userId,
                        label: child.name
                    }))}
                    // defaultValue={options[0]}
                    placeholder="아이를 선택하세요"
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
                          borderColor: state.isFocused ? "#DD5475" : "#DD5475",
                          borderRadius: "10px", 
                          boxShadow: "none",
                          "&:hover": {
                            borderColor: "#DD5475"
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
                <div className='msgiptbox'>
                    <div>"</div>
                    <input placeholder='이곳에 작성하는 메세지가 자녀에게 표시됩니다.' 
                        className='msgipt' type="text"
                        onChange={handleMessageChange} />
                    <div>"</div>
                </div>
                <div className='msgbtn'>
                <button
                    className={`msgbtnin ${isButtonDisabled ? "btn-disabled" : ""}`}
                    disabled={isButtonDisabled} onClick={handleSendMessage} >
                    작성완료
                </button>
                </div>
            </div>

        </div>
        
    );
};

export default Message;