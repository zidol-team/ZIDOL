import { useEffect, useState, createContext, useContext } from "react";
import { TotalContext } from "../context/TotalContext";

const Percentage = () => {
  // props : data (Mypage2 에서의 res2)

  const [total, setTotal] = useState([]);
  const [done, setDone] = useState([]);

  const totalData = useContext(TotalContext);

  useEffect(() => {}, []);

  return (
    <>
      <div>Percentage 컴포넌트</div>

      {/* <button onClick={() => checkValue()}>확인버튼</button> */}

      {/* <div>{props.data.data.total}</div> */}
    </>
  );
};

export default Percentage;
