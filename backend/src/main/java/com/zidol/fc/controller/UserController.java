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
	public Map<String, Boolean> singIn(HttpSession session, @RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		String userEmail = param.get("userEmail");
		User user = userService.findByUserEmail(userEmail);
		
		if(user != null) {
			session.setAttribute("user", user);
			result.put("singIn", true);
		} else {
			result.put("singIn", false);
		}
		
		return result;
	}
	
	@PostMapping("/CheckEmail.act")
	public Map<String, Boolean> checkId(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		String userEmail = param.get("userEmail");
		User user = userService.findByUserEmail(userEmail);
		
		if(user == null) {
			result.put("singUp", true);
		} else {
			result.put("singUp", false);
		}
		
		return result;
	}
	
	@PostMapping("/SignUp.act")
	public Map<String, Boolean> singUp(@RequestBody Map<String, String> params) {
		Map<String, Boolean> result = new HashMap<>();
		String userEmail = params.get("userEmail");
		User user = userService.findByUserEmail(userEmail);
		
		if(user != null) {
			result.put("singUp", true);
		} else {
			result.put("singUp", false);
		}
		
		return result;
	}
}
