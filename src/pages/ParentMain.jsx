import React from 'react';
import MainBanner from '../components/mainBanner/MainBanner';
import MenuList from '../components/menuList/MenuList';
import Header from '../components/header/Header';

const ParentMain = () => {
    return (
        <div>
            <Header/>
            <MainBanner bgColor='#FCFF5C' isParent={true} />
            <MenuList isParent={true} />
        </div>
    );
};

export default ParentMain;