import React, { useState } from 'react';
import PayHistory from '../components/payHistory/PayHistory';
import PayBanner from '../components/payBanner/PayBanner';
import Header from '../components/header/Header';

const Pay = () => {
    const [isCreated, setIsCreated] = useState(false);

    const qrDiv = () => {
        setIsCreated(true);
    };
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <PayBanner isCreated={isCreated} qrDiv={qrDiv}/>
            <PayHistory isCreated={isCreated}/>
        </div>
    );
};

export default Pay;