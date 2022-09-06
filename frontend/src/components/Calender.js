import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
//import "../App.css";
import '../components/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState({});
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const userInfo = {
      userCode: localStorage.getItem('userCode'),
      userEmail: localStorage.getItem('userEmail'),
      userName: localStorage.getItem('userName'),
      userNickname: localStorage.getItem('userNickname')
    };
    const userCode = localStorage.getItem('userCode');
    // 로그인 정보 저장(지금안되는중)
    setUser((user) => {
      return { ...user, ...userInfo };
    });
    console.log(user);

    fetch('/find-all-achievement.act', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        // userEmail, userPassword 전송
        userCode: userCode
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.achievements);
        const marks = [];

        res.data.achievements.map((mark, index) => {
          marks.push(mark.achievementRegDate);
          console.log(mark.achievementRegDate);
        });
        setMarks(marks);
        console.log(marks);
      });
  }, []);

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          formatDay={(locale, date) => moment(date).format('DD')}
          tileClassName={({ date, view }) => {
            if (marks.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
              return 'highlight';
            }
            return (
              <>
                <div></div>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
