package com.zidol.fc.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.repository.AchievementRepository;

@Service
public class AchievementService {
	
	@Autowired
	AchievementRepository achievementRepository;

	public Optional<Achievement> findbyAchievement(long csCode) {
		return achievementRepository.findById(csCode);
	}
	
	

}
