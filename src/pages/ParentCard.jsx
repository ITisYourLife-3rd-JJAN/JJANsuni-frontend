import React from 'react';
import Header from '../components/header/Header';
import InfoContainer from '../components/infoContainer/InfoContainer';
import CardHistory from '../components/cardHistory/CardHistory';

const ParentCard = () => {
    return (
        <div>
            <InfoContainer/>
            <CardHistory/>
        </div>
    );
};

export default ParentCard;