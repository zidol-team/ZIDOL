package com.zidol.fc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.Board;
import com.zidol.fc.repository.BoardRepository;
import com.zidol.fc.repository.ReplyRepository;
import com.zidol.fc.repository.UserRepository;

@Service
public class BoardService {

	@Autowired
	BoardRepository boardRepository;
	
	@Autowired
	ReplyRepository replyRepository;
	
	public Page<Board> findAllBoard(Pageable pageable) {
		return boardRepository.findAll(pageable);
	}
	
	public void insertBoard(Board board) {
		boardRepository.save(board);
	}
	
	public void modifyBoard(Board board) {
		boardRepository.save(board);
	}

	public Board findByBoardCode(long boardCode) {
		return boardRepository.findByBoardCode(boardCode);
	}
	
	public void deleteBoard(long boardCode) {
		 boardRepository.deleteById(boardCode);
	}
	
}



