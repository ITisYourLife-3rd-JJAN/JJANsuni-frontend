import { React, useState } from 'react';
import ProfileBackground from '../components/profile/ProfileBackground';
import MyBigCard from '../components/profile/MyBigCard';
import FamCardList from '../components/profile/FamCardList';
import StateCard from '../components/profile/StateCard';
import './css/profile.css';
import Header from '../components/header/Header';

const KidProfile = () => {

    return (
        <div className='profile-cards-container'>
            <Header/>
            <div className='cards-box'> 
                <MyBigCard isParent={false}/>
                <StateCard/>
                <FamCardList isParent={false}/>
            </div>
            <ProfileBackground/>
        </div>
    );
};

export default KidProfile;