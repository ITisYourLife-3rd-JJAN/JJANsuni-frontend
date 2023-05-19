import React from 'react';

const CompleteBtn = () => {
    return (
        <div>
            <button className={watched ? "next-btn" : "next-btn btn-disabled"} onClick={handleNextButtonClick} disabled={!watched}>
                    완료
            </button>
        </div>
    );
};

export default CompleteBtn;