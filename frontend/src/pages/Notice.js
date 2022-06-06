import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonTable from "../components/CommonTable";
import CommonTableColumn from "../components/CommonTableColumn";
import CommonTableRow from "../components/CommonTableRow";
import Button from "@mui/material/Button";

const GetBoardList = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetch("/find-all-board.act", {
      method: "GET",
      header: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBoard(data.ListUp.content);
        console.log(board);
      });
  }, []);

  const item = board.map((a, index) => (
    <CommonTableRow key={index}>
      <td>{a.boardCode}</td>
      <td
        onClick={() =>
          navigate(`/NoticeDetail?boardCode=${a.boardCode}`, {
            state: { board, boardCode: a.boardCode },
          })
        }
      >
        {a.boardTitle}
      </td>
      <td>{a.user}</td>
      <td>{a.boardRegDate}</td>
    </CommonTableRow>
  ));

  return item;
};

function View() {
  const item = GetBoardList();
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <CommonTable headersName={["글번호", "제목", "작성자", "등록일"]}>
          {item}
        </CommonTable>
        <div style={{ marginTop: "50px" }}>
          <Button variant="outlined" onClick={() => navigate(`/NoticeWrite`)}>
            글쓰기
          </Button>
        </div>
      </div>
    </>
  );
}

export default View;
