package com.zidol.fc.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.domain.AdminCS;
import com.zidol.fc.domain.CS;
import com.zidol.fc.domain.CSContent;
import com.zidol.fc.domain.User;
import com.zidol.fc.repository.AchievementRepository;
import com.zidol.fc.repository.CSContentRepository;
import com.zidol.fc.repository.CSRepository;

@Service
public class CSService {

	@Autowired
	CSRepository csRepository;
	
	@Autowired
	CSContentRepository csContentRepository;

	@Autowired
	AchievementRepository achievementRepository;

	public List<CS> findAll() {
		return csRepository.findAll();
	}

	public CS findCSByCsCode(long csCode) {
		return csRepository.findByCsCode(csCode);
	}
	
	public CSContent findCSContentByCs(CS cs) {
		return csContentRepository.findByCs(cs);
	}

	public Achievement insertAchievement(Achievement achievement) {
		return achievementRepository.save(achievement);
	}
	
	public Achievement duplicatedAchievement(long userCode, long csCode) {
		return achievementRepository.duplicatedAchievement(userCode, csCode);
	}

	public Map<String, Object> findByUser(User user) {
		Map<String, Object> result = new HashMap<>();
		List<Achievement> achievements = achievementRepository.findByUser(user);
		List<CS> css = new ArrayList<>();

		for (Achievement achievement : achievementRepository.findByUser(user)) {
			css.add(achievement.getCs());
		}

		result.put("achievements", achievements);
		result.put("css", css);

		return result;
	}
	
	public Map<String, Object> countByCsType(long userCode) {
		Map<String, Object> result = new HashMap<>();
		Map<String, Integer> total = new HashMap<>();
		Map<String, Integer> done = new HashMap<>();
		Map<String, Double> percent = new HashMap<>();
		String[] csTypes = new String[] { "알고리즘", "자료구조", "컴퓨터구조", "데이터베이스", "네트워크", "운영체제", "디자인패턴" };
		
		for(String csType : csTypes) {
			total.put(csType, csRepository.countByCsType(csType));
		}
		
		for(String csType : csTypes) {
			done.put(csType, achievementRepository.countByCsType(userCode, csType));
		}
		
		for(String csType : csTypes) {
			double per = (double) achievementRepository.countByCsType(userCode, csType) / csRepository.countByCsType(csType) * 100;
			percent.put(csType, per);
		}
		
		result.put("total", total);
		result.put("done", done);
		result.put("percent", percent);
		
		return result;
	}
	
	public List<AdminCS> findAllAdminCS() {
		return csRepository.findAllAdminCS();
	}
	
	public AdminCS findAdminCS(long csCode) {
		return csRepository.findAdminCS(csCode);
	}
	
	public AdminCS insertAdminCS(CS cs, CSContent csContent) {
		csRepository.save(cs);
		csContentRepository.save(csContent);
		long csCode = cs.getCsCode();
		return csRepository.findAdminCS(csCode);
	}
	
	public AdminCS updateAdminCS(CSContent csContent) {
		csContentRepository.save(csContent);
		long csCode = csContent.getCs().getCsCode();
		return csRepository.findAdminCS(csCode);
	}

}
