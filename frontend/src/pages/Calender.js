import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css' ; 
import '../App.css';

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    return (
      <div className='app'>
        <h1 className='text-center'>마이페이지</h1>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
          />
        </div>
        {date.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>study시작일:</span>{' '}
            <span> {date[0].toDateString()}</span>
           
            &nbsp;|&nbsp;
            <span className='bold'>study마감일:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className='text-center'>
            <span className='bold'>오늘날짜:</span>{' '}
            {date.toDateString()}
          </p>
        )}
      </div>
    );
  }
  

export default MyCalendar;