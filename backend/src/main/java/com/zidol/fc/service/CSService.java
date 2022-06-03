package com.zidol.fc.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.domain.CS;
import com.zidol.fc.domain.User;
import com.zidol.fc.repository.AchievementRepository;
import com.zidol.fc.repository.CSRepository;

@Service
public class CSService {
	
	@Autowired
	CSRepository csRepository;
	
	@Autowired
	AchievementRepository achievementRepository;
	
	public List<CS> findAll() {
		return csRepository.findAll();
	}
	
	public CS findByCsCode(long csCode) {
		return csRepository.findByCsCode(csCode);
	}
	
	public Achievement insertAchievement(Achievement achievement) {
		return achievementRepository.save(achievement);
	}
	
	public Map<String, Object> findByUser(User user) {
		Map<String, Object> result = new HashMap<>();
		List<Achievement> achievements = achievementRepository.findByUser(user);
		List<CS> css = new ArrayList<>();
		
		for(Achievement achievement : achievementRepository.findByUser(user)) {
			css.add(achievement.getCs());
		}
		
		result.put("achievements", achievements);
		result.put("css", css);
		
		
		return result;
	}

}
