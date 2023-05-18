import React, { useState } from 'react';
import './join.css'
import CommonJoin from '../../components/join/CommonJoin';

const Join = () => {
    
 const [isParent, setIsParent] = useState(true)

    return (
        <div className='join'>
            <div className='joinSub'>
                <div className = "join-container">
                    <div className='loginSlogan'>
                        <p>세 살 버릇 여든까지!</p>
                    </div>
                    <div className='loginImage'>
                        <img className="trip" src="img/parentJoin.png" alt='' />
                    </div>
                </div>
         
                <div className="joinInput">
                <div className="selectRoleBox">
                    <button className={`parentBtn ${isParent ? 'selected' : ''}`} onClick={() => setIsParent(true)}>부모 회원입니다</button>&nbsp;
                    <button className={`kidBtn ${!isParent ? 'selected' : ''}`} onClick={() => setIsParent(false)}>자녀 회원입니다</button><br/><br/><br/><br/><br/>
                </div>
                    <CommonJoin isParent={isParent} />
                </div>
            </div>
        </div>


    );
};

export default Join;