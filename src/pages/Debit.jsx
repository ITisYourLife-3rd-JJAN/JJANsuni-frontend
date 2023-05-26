import React, { useState } from 'react';
import DebitBanner from '../components/debitBanner/DebitBanner';
import DebitForm from '../components/debitForm/DebitForm';
import Header from '../components/header/Header';

const Debit = () => {
    const [kidUserId, setKidUserId] = useState();
    const [kidUserName, setKidUserName] = useState();
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <DebitBanner idx="1" color='#E5FAFC' setKidUserId={setKidUserId} setKidUserName={setKidUserName}/>
            <DebitForm kidUserId={kidUserId} kidUserName={kidUserName}/>
        </div>
    );
};

export default Debit;