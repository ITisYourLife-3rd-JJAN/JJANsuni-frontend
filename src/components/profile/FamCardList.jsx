import React from 'react';
import FamCard from './FamCard';
import './famCardList.css';

const FamCardList = ({isParent}) => {
    return (
        <ul className='famCard-list' >
            <FamCard
                isParent={isParent}
            />
        </ul>
    );
};

export default FamCardList;