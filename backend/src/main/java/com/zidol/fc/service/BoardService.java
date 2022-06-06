package com.zidol.fc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.Board;
import com.zidol.fc.domain.Reply;
import com.zidol.fc.repository.BoardRepository;
import com.zidol.fc.repository.ReplyRepository;

@Service
public class BoardService {

	@Autowired
	BoardRepository boardRepository;
	
	@Autowired
	ReplyRepository replyRepository;
	
	public Page<Board> findAllBoard(Pageable pageable) {
		return boardRepository.findAll(pageable);
	}
	
	public Board insertBoard(Board board) {
		return boardRepository.save(board);
	}
	
	public Board updateBoard(Board board) {
		return boardRepository.save(board);
	}

	public Board findByBoardCode(long boardCode) {
		return boardRepository.findByBoardCode(boardCode);
	}
	
	public void deleteBoard(long boardCode) {
		boardRepository.deleteById(boardCode);
	}
	
	public void deleteAllReply(List<Reply> reply) {
		replyRepository.deleteAllInBatch(reply);
	}
	
	public Reply insertReply(Reply reply) {
		return replyRepository.save(reply);
	}
	
	public Reply updateReply(Reply reply) {
		return replyRepository.save(reply);
	}
	
	public void deleteReply(long replyCode) {
		replyRepository.deleteById(replyCode);
	}
	
}



