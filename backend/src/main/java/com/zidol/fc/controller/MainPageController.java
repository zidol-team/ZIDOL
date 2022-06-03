package com.zidol.fc.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainPageController {
	
	@PostMapping("/userProfile")
	public Map<String,String> test2(@RequestBody Map<String, String> param){
	
		
		return null;
	}

}
