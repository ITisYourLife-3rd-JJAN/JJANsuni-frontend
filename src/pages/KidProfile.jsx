import React from 'react';
import ProfileBackground from '../components/profile/ProfileBackground';
import MyBigCard from '../components/profile/MyBigCard';
import FamCardList from '../components/profile/FamCardList';

const KidProfile = () => {
    return (
        <div className='profile-cards-container'>
            <ProfileBackground/>
            <MyBigCard/>
            <FamCardList/>
        </div>
    );
};

export default KidProfile;