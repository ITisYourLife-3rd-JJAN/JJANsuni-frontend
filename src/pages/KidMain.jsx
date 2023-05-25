import React from 'react';
import MainBanner from '../components/mainBanner/MainBanner';
import MenuList from '../components/menuList/MenuList';
import Header from '../components/header/Header';

const KidMain = () => {
    return (
        <div>
            <Header/>
            <MainBanner isParent={false}/>
            <MenuList/>
        </div>
    );
};

export default KidMain;