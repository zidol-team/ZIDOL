import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonTable from "../components/CommonTable";
import CommonTableColumn from "../components/CommonTableColumn";
import CommonTableRow from "../components/CommonTableRow";
import Button from "@mui/material/Button";

const GetCSList = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  const [csList, setcsList] = useState([]);

  useEffect(() => {
    fetch("/find-all-admin-cs.act", {
      method: "GET",
      header: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcsList(data.data);
        // console.log(data.data.content);
        // setBoard(data.data.content);
        // console.log(board);
      });
  }, []);

  const item = csList.map((a, index) => (
    <CommonTableRow key={index}>
      <td>{a.csCode}</td>
      <td
        onClick={() =>
          navigate(`/AdminDetail?csCode=${a.csCode}`, {
            state: { csList, csCode: a.csCode },
          })
        }
      >
        {a.csName}
      </td>
      <td>{a.csRegdate}</td>
    </CommonTableRow>
  ));

  return item;
};

function View() {
  const item = GetCSList();
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <CommonTable headersName={["CS코드", "제목", "등록일"]}>
          {item}
        </CommonTable>
        <div style={{ marginTop: "50px" }}>
          <Button variant="outlined" onClick={() => navigate(`/AdminWrite`)}>
            글쓰기
          </Button>
        </div>
      </div>
    </>
  );
}

export default View;
