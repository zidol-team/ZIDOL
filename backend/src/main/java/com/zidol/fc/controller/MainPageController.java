package com.zidol.fc.controller;

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
import com.zidol.fc.service.AchievementService;

@RestController
public class MainPageController {
	
	@Autowired
	AchievementService achievementService;
	
	@PostMapping("/test")
	public Map<String, String> test2(@RequestBody Map<String, String> param){
		return null;
	}
	
	@GetMapping("/achievement-test")
	public Optional<Achievement> AchievementDetail(@RequestParam long csCode) {
		Optional<Achievement> achievement = achievementService.findbyAchievement(csCode);
		return achievement;
	}

}
