package com.zidol.fc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.Board;
import com.zidol.fc.repository.BoardRepository;

@Service
public class BoardService {

	@Autowired
	BoardRepository boardRepository;
	
	public Page<Board> findAllBoard(Pageable pageable) {
		return boardRepository.findAll(pageable);
	}
	
	public void insertBoard(Board board) {
		boardRepository.save(board);
	}
}
