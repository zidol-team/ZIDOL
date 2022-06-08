import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonTable from "../components/CommonTable";
import CommonTableRow from "../components/CommonTableRow";
import Button from "@mui/material/Button";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import "./Board.css";

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
    <CommonTableRow key={index} className="boardListLine">
      <td>
        <span className="boardCode">{a.board.boardCode}</span>
      </td>
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
      <div className="boardContainer">
        <div className="boardMainContainer">
          <div>
            <div className="boardHeader">
              <h1>
                <span>질 문 게 시 판</span>
              </h1>
              <div className="boardDescAndWrite">
                <div className="boardDesc">
                  모르는 것이 있으면 질문을 올려주세요~~~
                </div>
                <ModeEditOutlineOutlinedIcon
                  variant="outlined"
                  onClick={() => navigate(`/BoardWrite`)}
                  className="writeButton"
                />
              </div>
            </div>

            <CommonTable headersName={["글번호", "제목", "작성자", "등록일"]}>
              {item}
            </CommonTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
