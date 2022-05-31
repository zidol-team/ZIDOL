package com.zidol.fc.controller;

import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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

	@PostMapping("/insert-board")
	public Map<String, Long> insertBoard(@RequestBody Map<String, Board> params) {
		Map<String, Long> result = new HashMap<>();
		System.out.println(params.get("qnaContent"));
		Board board = params.get("qnaContent");
		boardService.insertBoard(board);

		result.put("boardCode",board.getBoardCode());
		return result;
	}
	
	
	@GetMapping("/board-detail")
	public Board boardDetail(@RequestParam long boardCode){
		Board board = boardService.findBoardCode(boardCode);
		return board;
	}
	
	
    @GetMapping("/read-all")
    public ResponseEntity<DataResponse> readAllBoard(@PageableDefault(page=0, size=10) Pageable pageable){
        DataResponse dataResponse = new DataResponse();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        dataResponse.setStatus(StatusEnum.OK.statusCode);
        dataResponse.setMessage(StatusEnum.OK.code);
        dataResponse.setData(boardService.findAllBoard(pageable));

        return new ResponseEntity<>(dataResponse, headers, HttpStatus.OK);
    }
	
	
//	@GetMapping("/BoardList")
//	public Map<String, Boolean> boardList(@RequestBody Map<String, Board> params) {
//		Map<String, Boolean> result = new HashMap<>();
//		
//		boardService.findByTitle("boardTitle");
//		result.put("boardTitle", true);
//		return result;
//	}
}
