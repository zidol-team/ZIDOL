package com.zidol.fc.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.User;
import com.zidol.fc.service.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/SignIn.act")
	public Map<String, Boolean> singIn(HttpSession session, @RequestBody Map<String, String> params) {
		Map<String, Boolean> result = new HashMap<>();
		String userEmail = params.get("userEmail");
		User user = userService.findByUserEmail(userEmail);

		if (user == null) {
			// 이메일 계정이 존재하지 않는 경우
			result.put("signIn", false);
			result.put("userEmail", false);
		} else if(user.getUserPassword().equals(params.get("userPassword"))) {
			session.setAttribute("user", user);
			result.put("signIn", true);
		} else {
			// 비밀번호가 틀렸을 경우
			result.put("signIn", false);
			result.put("userPassword", false);
		}

		return result;
	}

	@PostMapping("/CheckEmail.act")
	public Map<String, Boolean> checkId(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		String userEmail = param.get("userEmail");
		User user = userService.findByUserEmail(userEmail);

		if (user == null) {
			// 이메일 계정이 존재하지 않는 경우
			result.put("checkId", true);
		} else {
			result.put("checkId", false);
		}

		return result;
	}

	@PostMapping("/SignUp.act")
	public Map<String, Boolean> signUp(@RequestBody Map<String, String> params) {
		Map<String, Boolean> result = new HashMap<>();
		User user = User.builder().userEmail(params.get("userEmail")).userPassword(params.get("userPassword"))
				.userName(params.get("userName")).userNickname(params.get("userNickname")).build();
		
		User register = userService.insertUser(user);
		
		if (register != null) {
			result.put("signUp", true);
		} else {
			result.put("signUp", false);
		}

		return result;
	}
	
	@PostMapping("/FindEmail.act")
	public Map<String, String> findEmail(@RequestBody Map<String, String> params) {
		Map<String, String> result = new HashMap<>();
		String userName = params.get("userName");
		User user = userService.findByUserName(userName);
		
		if (user != null) {
			result.put("findEmail", user.getUserEmail());
		} else {
			result.put("findEmail", "false");
		}

		return result;
	}
	
	@PostMapping("/FindPassword.act")
	public Map<String, Boolean> findPassword(@RequestBody Map<String, String> params) {
		Map<String, Boolean> result = new HashMap<>();
		User user = User.builder().userEmail(params.get("userEmail")).userPassword(params.get("userPassword"))
				.userName(params.get("userName")).userNickname(params.get("userNickname")).build();
		
		User register = userService.insertUser(user);
		
		if (register != null) {
			result.put("findPassword", true);
		} else {
			result.put("findPassword", false);
		}

		return result;
	}
	
}
