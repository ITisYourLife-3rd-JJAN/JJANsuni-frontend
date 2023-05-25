import React from 'react';
import ProfileBackground from '../components/profile/ProfileBackground';
import MyBigCard from '../components/profile/MyBigCard';
import FamCardList from '../components/profile/FamCardList';
import Header from '../components/header/Header';

const ParentProfile = () => {
    return (
        <div className='profile-cards-container'>
            <Header/>
            <div className='cards-box'> 
                <MyBigCard isParent={true}/>
                <br/><br/><br/>
                <FamCardList isParent={true}/>
            </div>
            <ProfileBackground/>

        </div>
    );
};

export default ParentProfile;