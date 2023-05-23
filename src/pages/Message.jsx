import { React, useEffect } from 'react';
import '../pages/css/message.css'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Message = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const getChildrens = () => {
            axios
                .get(`http://localhost:8080/api/v1/users/family-List/1`)
                .then((response) => {
                    console.log(response.data.data)
                    const children = response.data.data.filter((child) => child.isParent === "F");
                    console.log(children);
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        };
    
        getChildrens();
      }, []);

    return (
        <div className='msgmain'>
            <div className='msgbox'>
                <div className='msgtitlebox'>
                    <div className='msgtitle'>응원메세지 작성하기</div>
                    <img onClick={handleGoBack} className='quitbtn' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt=""/>
                </div>
                <div className='msgkid'>사랑하는 찌글이!</div>
                <div className='msgiptbox'>
                    <div>"</div>
                    <input placeholder='이곳에 작성하는 메세지가 자녀에게 표시됩니다.' className='msgipt' type="text" />
                    <div>"</div>
                </div>
                <div className='msgbtn'>
                    <div className='msgbtnin'>작성완료</div>
                </div>
            </div>

        </div>
        
    );
};

export default Message;