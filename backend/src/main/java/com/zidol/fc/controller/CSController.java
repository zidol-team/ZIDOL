package com.zidol.fc.controller;

import java.nio.charset.Charset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.DataResponse;
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
		
		dataResponse.setStatus(StatusEnum.OK.status);
		dataResponse.setMessage(StatusEnum.OK.code);
		dataResponse.setData(csService.findAllCS());
		
		return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
	}
}
