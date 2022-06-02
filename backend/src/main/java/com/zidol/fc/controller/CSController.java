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

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.domain.CS;
import com.zidol.fc.domain.User;
import com.zidol.fc.service.CSService;
import com.zidol.fc.service.UserService;

@RestController
public class CSController {
	
	@Autowired
	CSService csService;
	
	@Autowired
	UserService userService;

	@GetMapping("/cs-study.act")
	public ResponseEntity<DataResponse> findAllCS() {
		
		DataResponse dataResponse = new DataResponse();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application","json",Charset.forName("UTF-8")));
		
		dataResponse.setStatus(StatusCode.OK.getStatus());
		dataResponse.setCode(StatusCode.OK.getCode());
		dataResponse.setData(csService.findAll());
		
		return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
	}
	
	@PostMapping("/achievement.act")
	public ResponseEntity<DataResponse> achievement(@RequestBody Map<String, Long> params) {
		
<<<<<<< HEAD
		User user = userService.findByUserEmail(params.get("csCode"));
		//CS cs = csService.find
=======
		User user = userService.findByUserCode(params.get("userCode"));
		CS cs = csService.findByCsCode(params.get("csCode"));
		Achievement achievement = Achievement.builder().user(user).cs(cs).build();
>>>>>>> 012880cb6f68cdf3630defea258ef396966e1346
		
		DataResponse dataResponse = new DataResponse();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application","json",Charset.forName("UTF-8")));
		
		if(csService.insertAchievement(achievement) != null) {
			dataResponse.setStatus(StatusCode.OK.getStatus());
			dataResponse.setCode(StatusCode.OK.getCode());
			dataResponse.setData(achievement);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		} else {
			dataResponse.setStatus(StatusCode.NOT_FOUND.getStatus());
			dataResponse.setCode(StatusCode.NOT_FOUND.getCode());
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.NOT_FOUND);
		}
	}
}
