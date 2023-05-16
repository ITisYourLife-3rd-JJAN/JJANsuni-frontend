import React from 'react';
import FamCard from './FamCard';
import './famCardList.css';

const FamCardList = () => {
    return (
        <ul className='famCard-list' >
            <FamCard/>
        </ul>
    );
};

export default FamCardList;