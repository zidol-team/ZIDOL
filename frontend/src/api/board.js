import http from '../utils/axios';
import { API_GATEWAY_URL } from './config';

export const URLS = {
  //GET
  BOARD_LIST: `/find-all-board.act`,
  BOARD_DETAIL: `/find-board.act?boardCode=`,
  //POST
  BOARD_WRITE: `/insert-board.act`,
  BOARD_MODIFY: `/update-board.act`
};
