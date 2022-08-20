import { useState } from 'react';
import './calendar.scss';

const Calendar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [monthMode, setMonthMode] = useState<boolean>(false);

  const dateheaderContent = ['일', '월', '화', '수', '목', '금', '토'];
  const dateContent = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const monthContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className='wrapper'>
      <div className='calendar' onClick={() => setIsOpen(!isOpen)}>
        <div className='red'></div>
        <div className='contents'>
          <h3 className='date'>20</h3>
        </div>
      </div>
      {isOpen && (
        <div className='dropdown'>
          <div className='header'>
            <h3 className='title' onClick={() => setMonthMode(!monthMode)}>
              {monthMode ? '2022' : '8월'}
            </h3>
          </div>

          {monthMode ? (
            <div className='month'>
              <div className='month-content'>
                {monthContent.map((item: number) => (
                  <p className='month-item' key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className='date'>
              <div className='date-header'>
                {dateheaderContent.map((item: string, index: number) => (
                  <p className='header-item' key={index}>
                    {item}
                  </p>
                ))}
              </div>

              <div className='date-content'>
                {dateContent.map((item: number) => (
                  <p className='date-item' key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
