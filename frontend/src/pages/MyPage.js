import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function MyPage() {
  const location = useLocation();
  /*
  location.state 정보
  userEmail: res.data.userEmail,
  userName: res.data.userName,
  userNickname: res.data.userNickname,
 */

  const [user, setUser] = useState({});

  console.log(user);

  useEffect(() => {
    //
    setUser(location.state);
  }, []);

  return (
    <>
      <h1>MyPage</h1>
      <div>{user.userEmail}</div>
      <div>{user.userName}</div>
      <div>{user.userNickname}</div>
    </>
  );
}

export default MyPage;
