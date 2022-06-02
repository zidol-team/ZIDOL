package com.zidol.fc.controller;

import java.nio.charset.Charset;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.service.CSService;

@RestController
public class CSController {
	
	@Autowired
	CSService csService;

	@GetMapping("/cs-study.act")
	public ResponseEntity<DataResponse> findAllCS() {
		DataResponse dataResponse = new DataResponse();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application","json",Charset.forName("UTF-8")));
		
		dataResponse.setStatus(StatusCode.OK.getStatus());
		dataResponse.setCode(StatusCode.OK.getCode());
		dataResponse.setData(csService.findAllCS());
		
		return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
	}
	
	@PostMapping("/achievement.act")
	public void achievement(@RequestBody Map<String, String> params) {
		System.out.println(params.get("csCode"));
//		DataResponse dataResponse = new DataResponse();
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(new MediaType("application","json",Charset.forName("UTF-8")));
//		
//		dataResponse.setStatus(StatusCode.OK.getStatus());
//		dataResponse.setCode(StatusCode.OK.getCode());
//		dataResponse.setData(csService.findAllCS());
//		
//		return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
	}
}
