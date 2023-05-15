import React from 'react';
import ProfileBackground from '../components/profile/ProfileBackground';
import MyBigCard from '../components/profile/MyBigCard';

const KidProfile = () => {
    return (
        <div className='profile-cards-container'>
            <ProfileBackground/>
            <MyBigCard/>
        </div>
    );
};

export default KidProfile;