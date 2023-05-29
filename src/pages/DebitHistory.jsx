import React, { useState } from 'react';
import DebitHistoryForm from '../components/debitHistory/DebitHistoryForm';
import DebitBanner from '../components/debitBanner/DebitBanner';
import Header from '../components/header/Header';

const DebitHistory = () => {
    const [kidUserId, setKidUserId] = useState();
    const [kidUserName, setKidUserName] = useState();
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <DebitBanner idx="1" setKidUserId={setKidUserId} setKidUserName={setKidUserName}/>
            <DebitHistoryForm kidUserId={kidUserId} kidUserName={kidUserName}/>
        </div>
    );
};

export default DebitHistory;