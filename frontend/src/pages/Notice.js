import { useState } from "react";

function Notice() {
  const [board, setboard] = useState({});
  const profiletest = () => {
    fetch("/find-all-board", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((log) => console.log(log))
      .then((data) => setboard(data));
  };

  return (
    <div>
      <div>Notice</div>
      <button onClick={profiletest}>test</button>
      <div>
        여기에 넣고싶어요
        <table>
          <th>제목</th>
        </table>
      </div>
    </div>
  );
}

export default Notice;
