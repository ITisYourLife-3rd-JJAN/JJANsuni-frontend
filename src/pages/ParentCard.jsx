import React from 'react';
import CardHistory from '../components/cardHistory/CardHistory';
import DebitBanner from '../components/debitBanner/DebitBanner';
import Header from '../components/header/Header';

const ParentCard = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <DebitBanner idx="3"/>
            <CardHistory/>
        </div>
    );
};

export default ParentCard;