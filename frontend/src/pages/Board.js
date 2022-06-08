import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonTable from "../components/CommonTable";
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
        console.log(data.data);
        setBoard(data.data);
      });
  }, []);

  const item = board.map((a, index) => (
    <CommonTableRow key={index}>
      <td>{a.board.boardCode}</td>
      <td
        onClick={() =>
          navigate(`/BoardDetail?boardCode=${a.board.boardCode}`, {
            state: { board, boardCode: a.board.boardCode },
          })
        }
      >
        {a.board.boardTitle}
      </td>
      <td>{a.user.userNickname}</td>
      <td>{a.board.boardRegDate}</td>
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
        <Button
          variant="outlined"
          onClick={() => navigate(`/BoardWrite`)}
          style={{ float: "right" }}
        >
          글쓰기
        </Button>
        <CommonTable headersName={["글번호", "제목", "작성자", "등록일"]}>
          {item}
        </CommonTable>
      </div>
    </>
  );
}

export default View;
