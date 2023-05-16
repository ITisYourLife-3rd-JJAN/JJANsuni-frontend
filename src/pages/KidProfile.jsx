import React from 'react';
import ProfileBackground from '../components/profile/ProfileBackground';
import MyBigCard from '../components/profile/MyBigCard';
import FamCardList from '../components/profile/FamCardList';
import StateCard from '../components/profile/StateCard';
import './css/profile.css';

const KidProfile = () => {
    return (
        <div className='profile-cards-container'>
            <div className='cards-box'> 
                <MyBigCard/>
                <StateCard/>
                <FamCardList/>
            </div>
            <ProfileBackground/>
        </div>
    );
};

export default KidProfile;