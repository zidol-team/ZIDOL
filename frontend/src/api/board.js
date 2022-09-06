import { PATH_URLS } from '../routes/path';
import http from '../utils/axios';
import { API_GATEWAY_URL } from './config';

export const URLS = {
  //GET
  BOARD_LIST: `/find-all-board.act`,
  BOARD_DETAIL: `/find-board.act?boardCode=`,
  //POST
  BOARD_WRITE: `/insert-board.act`,
  BOARD_MODIFY: `/update-board.act`,
  BOARE_DELETE: `/delete-board.act`
};
export function getBoardList(setBoard) {
  fetch(URLS.BOARD_LIST, {
    method: 'GET',
    header: {
      'content-type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => {
      setBoard(data.data);
    });
}
export function postBoardWrite(qnaContent) {
  fetch(URLS.BOARD_WRITE, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      boardTitle: qnaContent.boardTitle,
      boardContent: qnaContent.boardContent,
      boardType: qnaContent.boardType,
      // userEmail, userPassword 전송
      userCode: localStorage.getItem('userCode')
    })
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('res : ');
      console.log(res);

      alert('등록완료');
      if (qnaContent.boardContent !== '') {
        window.location.replace(PATH_URLS.BOARD);
      } else {
        alert('글을 입력해주세요');
      }
    });
}
export function GetBoardDetail(changelocationCode, setUser, setBoard, setList1) {
  fetch(URLS.BOARD_DETAIL + `${changelocationCode}`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      setUser(data.data.user);
      setBoard(data.data.board);
      setList1(data.data.replys);
    });
}
export function DeleteBoard(changelocationCode, userCode) {
  fetch(URLS.BOARE_DELETE, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      boardCode: changelocationCode,
      userCode: userCode
    })
  }).then((ref) => {
    window.location.replace(PATH_URLS.BOARD);
  });
}
