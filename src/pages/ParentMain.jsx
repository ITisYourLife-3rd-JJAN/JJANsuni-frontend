import React from 'react';
import MainBanner from '../components/mainBanner/MainBanner';
import MenuList from '../components/menuList/MenuList';

const ParentMain = () => {
    return (
        <div>
            <MainBanner bgColor='#FCFF5C' />
            <MenuList />
        </div>
    );
};

export default ParentMain;