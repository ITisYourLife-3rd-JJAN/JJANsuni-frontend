import { React, useEffect, useState } from 'react';
import '../pages/css/message.css'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Message = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const [selectedChild, setSelectedChild] = useState(""); 
    const [children, setChildren] = useState([]); 
    const [messageText, setMessageText] = useState(""); // State for message text
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State for button disabled state


    useEffect(() => {
        const getChildrens = () => {
            axios
                .get(`http://localhost:8080/api/v1/users/family-List/1`)
                .then((response) => {
                    const filteredChildren = response.data.data.filter(
                        (child) => child.isParent === "F"
                      );
                      setChildren(filteredChildren); 
                    })
                .catch((error) => {
                    console.log(error);
                })
        };
    
        getChildrens();
    }, []);

    const handleChildSelect = (event) => {
        setSelectedChild(event.target.value);
        checkButtonDisabled(event.target.value, messageText); // Call checkButtonDisabled when child is selected
    };
    
    const handleMessageChange = (event) => {
        setMessageText(event.target.value);
        checkButtonDisabled(selectedChild, event.target.value); // Call checkButtonDisabled when message text is changed
    };
    
    const checkButtonDisabled = (selectedChild, messageText) => {
        if (selectedChild !== "" && messageText !== "") {
            setIsButtonDisabled(false); // Enable button if child is selected and message text is not empty
        } else {
            setIsButtonDisabled(true); // Disable button otherwise
        }
    };
    
    const handleSendMessage = () => {
        axios
            .post("http://localhost:8080/api/v1/users/email-check", {
                userId : 2
            })
            .then((response) => {
                console.log(response);
                alert("22")
            })
            .catch((error) => {
                console.log(error.response.data);
                alert("11")
            })
    };
    
    return (
        <div className='msgmain'>
            <div className='msgbox'>
                <div className='msgtitlebox'>
                    <div className='msgtitle'>우리 아이에게 힘이 되는 응원을 보내주세요❣️</div>
                    <img onClick={handleGoBack} className='quitbtn' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt=""/>
                </div>
                <div>
                <select
                    className="msgkid" value={selectedChild}
                    onChange={handleChildSelect}>
                    <option value="">아이를 선택하세요</option>
                    
                    {children.map((child) => (
                    <option key={child.userId} value={child.name}>
                        {child.name}
                    </option>
                    ))}
                </select>
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