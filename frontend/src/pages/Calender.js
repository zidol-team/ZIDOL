import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";

//import 'react-calendar/dist/Calendar.css' ; 
import '../App.css';
import '../components/Calendar.css';

function MyCalendar() {
    const [date, setDate] = useState(new Date());
    const marks = [
      "15-06-2022",
      "03-06-2022",
      "07-06-2022",
      "12-06-2022",
      "13-06-2022",
      "15-06-2022",
    ];
    return (
      <div className='app'>
        <h1 className='text-center'>마이페이지</h1>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
            tileClassName={({ date, view }) => {
              let html = [];
              if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                return "highlight";
               // html.push(<div className="fire"></div>);
              }
              return (
                <>
                  <div>
                  
                  </div>
                </>
              );
            }}
          />
        </div>
        {date.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>study시작일:</span>{' '}
            <span> {date[0].toDateString()}</span>
           
            &nbsp; &nbsp;
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