import React, { useState } from 'react';
import './missionHistory.css'

const MissionHistory = () => {

  const [currPage, setCurrPage] = useState(1);
  const page = 6;

  const data = [
    { id: 1, name: 'John', age: 1, addr: 'cj' },
    { id: 2, name: 'Jane', age: 2, addr: 'ic' },
    { id: 3, name: 'Bob', age: 3, addr: 'dj' },
    { id: 4, name: 'John', age: 4, addr: 'dh' },
    { id: 5, name: 'Jane', age: 5, addr: 'we' },
    { id: 6, name: 'Bob', age: 6, addr: 'bf' },
    { id: 7, name: 'John', age: 7, addr: 'bd' },
    { id: 8, name: 'Jane', age: 8, addr: 'hm' },
    { id: 9, name: 'Bob', age: 9, addr: 'er' },
    { id: 10, name: 'John', age: 10, addr: 'xc' },
    { id: 11, name: 'Jane', age: 11, addr: 'ef' },
    { id: 12, name: 'Bob', age: 12, addr: 'uy' },
    { id: 13, name: 'John', age: 13, addr: 'dg' },
    { id: 14, name: 'Jane', age: 14, addr: 'bv' },
    { id: 15, name: 'Bob', age: 15, addr: 'wr' },
    { id: 16, name: 'John', age: 16, addr: 'dj' },
    { id: 17, name: 'Jane', age: 17, addr: 'eg' },
    { id: 18, name: 'Bob', age: 18, addr: 'dd' },
    { id: 19, name: 'John', age: 19, addr: 'zz' },
    { id: 20, name: 'Jane', age: 20, addr: 'de' },
    { id: 21, name: 'Bob', age: 21, addr: 'mt' },
    { id: 22, name: 'John', age: 22, addr: 'ht' },
    { id: 23, name: 'Jane', age: 23, addr: 'fh' },
    { id: 24, name: 'Bob', age: 24, addr: 'sg' },
    { id: 25, name: 'John', age: 25, addr: 'er' },
    { id: 26, name: 'Jane', age: 26, addr: 'ku' },
    { id: 27, name: 'Bob', age: 27, addr: 'cd' },
    { id: 28, name: 'John', age: 28, addr: 'we' },
    { id: 29, name: 'Jane', age: 29, addr: 'ht' },
    { id: 30, name: 'Bob', age: 30, addr: 'dj' },
  ];

  const getCurrData = () => {
    const sidx = (currPage -1) * page;
    const eidx = sidx + page;
    return data.slice(sidx, eidx)
  }

  const handlePage = (pageNum) => {
    setCurrPage(pageNum)
  }

  const firstPage = currPage === 1;
  const lastPage = currPage === Math.ceil(data.length / page);

  return (
    <div className='mhistoryBox'>
      <div className='minnerBox'>
        <div className='mhistoryTable'>
          <div className='mcol'>맵 번호</div>
          <div className='mcol'>미션 번호</div>
          <div className='mcol'>수행 일시</div>
        </div>
        {getCurrData().map((item) => (
          <div className='itmbox'>
            <div className='border'></div>
            <div className='mhistoryRow' key={item.id}>
              <div className='mcol'>{item.name}</div>
              <div className='mcol'>{item.age}</div>
              <div className='mcol'>{item.addr}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='paginations'>
        <div
          onClick={() => handlePage(currPage-1)}
          className={firstPage ? 'disabled' : 'abled'}
        >
          <div>&lt;</div>
          <div>이전</div>
        </div>
        <div
          onClick={() => handlePage(currPage+1)}
          className={lastPage ? 'disabled' : 'abled'}
        >
          <div>&gt;</div>
          <div>다음</div>
        </div>
      </div>
    </div>
  );
};

export default MissionHistory;