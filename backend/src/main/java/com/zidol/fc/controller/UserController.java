package com.zidol.fc.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
	
	@PostMapping("/helloworld")
	public Map<String, String> helloWorld(@RequestBody Map<String, String> param) {
		String s = param.get("hello");
		System.out.println(s);
		Map<String, String> m = new HashMap<String, String>();
		m.put("받아유", "왜 안되냐");
		return m;
	}
}
