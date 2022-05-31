package com.zidol.fc.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.Board;
import com.zidol.fc.service.BoardService;

@RestController
public class BoardController {

	@Autowired
	BoardService boardService;

	@GetMapping("/ListUp.act")
	public Map<String, Page<Board>> ListUp(@PageableDefault(page = 0, size = 10) Pageable pageable) {
		Map<String, Page<Board>> result = new HashMap<>();
		result.put("ListUp", boardService.findAll(pageable));
		return result;
	}

	@PostMapping("/InsertBoard.act")
	public Map<String, Boolean> insertBoard(@RequestBody Map<String, Board> params) {
		Map<String, Boolean> result = new HashMap<>();
		System.out.println(params.get("qnaContent"));
//		System.out.println(params.get("boardTitle"));
//		System.out.println(params.get("boardContent"));
//		Board board = Board.builder().boardTitle(params.get("boardTitle")).boardContent(params.get("boardContent"))
//				.build();
		Board board = params.get("qnaContent");
		boardService.insertBoard(board);

		return result;
	}
}
