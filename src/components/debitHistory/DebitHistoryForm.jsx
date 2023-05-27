import React from 'react';
import './debitHistoryForm.css';
import DebitHistory from './DebitHistory';

const DebitHistoryForm = ({kidUserId, kidUserName}) => {
    return (
        <div className='debitHistory'>
            <div className='debitScroll'>
                <table className='debitTable'>
                    <DebitHistory kidUserId={kidUserId} kidUserName={kidUserName}/>
                </table>
            </div>
        </div>
    );
};

export default DebitHistoryForm;