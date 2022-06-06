package com.zidol.fc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.domain.Board;
import com.zidol.fc.domain.CS;
import com.zidol.fc.domain.User;
import com.zidol.fc.service.AchievementService;
import com.zidol.fc.service.UserService;

@RestController
public class MainPageController {
	
	@Autowired
	AchievementService achievementService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/test")
	public Map<String, String> test2(@RequestBody Map<String, String> param){
		return null;
	}
	
	@GetMapping("/achievement-test")
	public Map<String, List<Achievement>> AchievementDetail(@RequestParam Map<String, Object> params) {
		Map<String, List<Achievement>> achievement = new HashMap<>();
		achievement.put("csList",  (List<Achievement>) achievementService.findByCsCode((long) params.get("csCode")));
		return achievement;
	}
	
}
