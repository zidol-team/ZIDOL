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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.Board;
import com.zidol.fc.domain.DataResponse;
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
//		System.out.println(params.get("boardTitle"));
//		System.out.println(params.get("boardContent"));
//		Board board = Board.builder().boardTitle(params.get("boardTitle")).boardContent(params.get("boardContent"))
//				.build();
		Board board = params.get("qnaContent");
		boardService.insertBoard(board);

		result.put("boardCode",board.getBoardCode());
		return result;
	}
	
	
	@GetMapping("/board-detail")
	public Map<String, Board> boardDetail(@RequestParam String boardCode){
		Board board = boardService.findByBoardCode(boardCode);
		Map<String, Board> result = new HashMap<>();
		if(board != null) {
			result.put("board",board);
		}else {
			System.out.println("보드에 객체가 없습니다");
		}
		return result;
	}
	
    @GetMapping("/read-all")
    public ResponseEntity<DataResponse> readAllBoard(@PageableDefault(page=0, size=10) Pageable pageable){
        DataResponse dataResponse = new DataResponse();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        dataResponse.setStatus(StatusEnum.OK.status);
        dataResponse.setMessage(StatusEnum.OK.code);
        dataResponse.setData(boardService.findAllBoard(pageable));

        return new ResponseEntity<>(dataResponse, headers, HttpStatus.OK);
    }
	
}
