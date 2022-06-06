package com.zidol.fc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.domain.User;

public interface AchievementRepository extends JpaRepository<Achievement, Long> {
	
	public List<Achievement> findByUser(User user);
}
