import { useEffect, useState } from "react";

const Percentage = (props) => {
  // props : data (Mypage2 에서의 res2)

  const [total, setTotal] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    setTotal(props.data.data.total);
    setDone(props.data.data.done);
  }, [total, done]);

  const checkValue = () => {
    console.log(total);
    console.log(done);
  };

  return (
    <>
      <div>Percentage 컴포넌트</div>

      <button onClick={() => checkValue()}>확인버튼</button>

      {/* <div>{props.data.data.total}</div> */}
    </>
  );
};

export default Percentage;
