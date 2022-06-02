package com.zidol.fc.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.Board;
import com.zidol.fc.service.BoardService;

@RestController
public class BoardController {

	@Autowired
	BoardService boardService;

	@GetMapping("/find-all-board")
	public Map<String, Page<Board>> findAllBoard(@PageableDefault(page = 0, size = 10) Pageable pageable) {
		Map<String, Page<Board>> result = new HashMap<>();
		result.put("ListUp", boardService.findAllBoard(pageable));
		return result;
	}
	
}
