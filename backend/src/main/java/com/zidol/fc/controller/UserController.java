package com.zidol.fc.controller;

import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.DataResponse;
import com.zidol.fc.domain.User;
import com.zidol.fc.service.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/sign-up")
	public ResponseEntity<DataResponse> signUp(@RequestBody Map<String, String> params) {
		Map<String, Boolean> singUpFailed = new HashMap<>();
		
		DataResponse dataResponse = new DataResponse();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

		User user = User.builder().userEmail(params.get("userEmail")).userPassword(params.get("userPassword"))
				.userName(params.get("userName")).userNickname(params.get("userNickname")).build();

		if (userService.insertUser(user) != null) {
			dataResponse.setStatus(StatusEnum.OK.status);
			dataResponse.setMessage(StatusEnum.OK.code);
			dataResponse.setData(user);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		} else {
			singUpFailed.put("user", false);
			dataResponse.setStatus(StatusEnum.OK.status);
			dataResponse.setMessage(StatusEnum.OK.code);
			dataResponse.setData(singUpFailed);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		}
	}

	@PostMapping("/sign-in")
	public ResponseEntity<DataResponse> singIn(HttpSession session, @RequestBody Map<String, String> params) {
		String userEmail = params.get("userEmail");
		User user = userService.findByUserEmail(userEmail);
		Map<String, Boolean> singInFailed = new HashMap<>();
		
		DataResponse dataResponse = new DataResponse();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json",Charset.forName("UTF-8")));

		if (user == null) {
			// 이메일 계정이 존재하지 않는 경우
			singInFailed.put("userEmail", false);
			dataResponse.setStatus(StatusEnum.OK.status);
			dataResponse.setMessage(StatusEnum.OK.code);
			dataResponse.setData(singInFailed);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		} 
		
		if (user.getUserPassword().equals(params.get("userPassword"))) {
			session.setAttribute("user", user);
			dataResponse.setStatus(StatusEnum.OK.status);
			dataResponse.setMessage(StatusEnum.OK.code);
			dataResponse.setData(user);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		} else {
			// 비밀번호가 틀렸을 경우
			singInFailed.put("userEmail", true);
			singInFailed.put("userPassword", false);
			dataResponse.setStatus(StatusEnum.OK.status);
			dataResponse.setMessage(StatusEnum.OK.code);
			dataResponse.setData(singInFailed);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		}
	}

	@PostMapping("/check-email.act")
	public ResponseEntity<DataResponse> checkId(@RequestBody Map<String, String> param) {
		String userEmail = param.get("userEmail");
		User user = userService.findByUserEmail(userEmail);
		Map<String, Boolean> result = new HashMap<>();
		
		DataResponse dataResponse = new DataResponse();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json",Charset.forName("UTF-8")));


		if (user == null) {
			// 이메일 계정이 존재하지 않는 경우
			result.put("userEmail", true);
			dataResponse.setStatus(StatusEnum.OK.status);
			dataResponse.setMessage(StatusEnum.OK.code);
			dataResponse.setData(result);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		} else {
			result.put("userEmail", false);
			dataResponse.setStatus(StatusEnum.OK.status);
			dataResponse.setMessage(StatusEnum.OK.code);
			dataResponse.setData(result);
			
			return new ResponseEntity<DataResponse>(dataResponse, headers, HttpStatus.OK);
		}
	}
}
