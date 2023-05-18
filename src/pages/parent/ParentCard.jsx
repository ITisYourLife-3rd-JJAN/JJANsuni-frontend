import React from 'react';
import CardHistory from '../../components/cardHistory/CardHistory';
import DebitBanner from '../../components/debitBanner/DebitBanner';

const ParentCard = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <DebitBanner idx="3"/>
            <CardHistory/>
        </div>
    );
};

export default ParentCard;