import React from 'react';
import './debitForm.css'

const DebitForm = () => {
    return (
        <div className='debitForm'>
            <div className='infobox'>
                <div className='fstbox'>
                    <div>
                        <div className='bigtext'>찌글이 님 계좌에서</div>
                        <div>잔액 찌글이 원</div>
                    </div>
                    <div>
                        <img className='quitbtn' src={`${process.env.PUBLIC_URL}/assets/images/quit.png`} alt="" width={20}/>
                    </div>
                </div>
                <div>
                    <div className='bigtext'>찌글이 님 계좌로 송금합니다.</div>
                    <div>찌글이계좌번호</div>
                </div>
                <div className='pricebox'>
                    <div className='bigtext'>얼마를 보낼까요?</div>
                    <input className='debitipt' type="number" />
                    <div className='bigtext'>원</div>
                </div>
            </div>
        </div>
    );
};

export default DebitForm;