import React, { useState } from 'react';
import './join.css'
import CommonJoin from '../components/join/CommonJoin';

const Join = () => {
    
 const [isParent, setIsParent] = useState(true)

    return (
        <div className='join'>
            <div className='joinSub'>

                <div className='joinSlogan'>
                    <p>세 살 버릇 여든까지!</p>
                </div>

                <div className='joinImage'>
                    <img ClassName="joinParent " src="img/parentJoin.png"></img>
                </div>
         
                <div className="whiteBackground">
                    <div className="selectRoleBox">
                        <button class="parentBtn" onClick={() => setIsParent(true) }>부모 회원입니다</button>&nbsp;
                        <button class="kidBtn" onClick={() => setIsParent(false)}>자녀 회원입니다</button><br/><br/><br/><br/><br/>
                    </div>
                        <CommonJoin isParent={isParent} />
                </div>
            </div>
        </div>


    );
};

export default Join;