import React from 'react';
import './profileBackground.css';

const ProfileBackground = ({isParent}) => {
    return (
        <div className='profile-back-container'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/moneystack.png`}
                alt=''
                className='profile-background-image-1' 
            />
            <img 
                src={`${process.env.PUBLIC_URL}/assets/images/pigcoin.png`} 
                alt=""
                className='profile-background-image-2' 
            />
        </div>
    );
};

export default ProfileBackground;