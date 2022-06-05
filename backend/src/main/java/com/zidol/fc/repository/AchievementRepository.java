package com.zidol.fc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.domain.User;

public interface AchievementRepository extends JpaRepository<Achievement, Long> {
	
	public List<Achievement> findByUser(User user);
	
	@Query(value = "select * "
			+ "from (select * "
				  + "from achievement "
				  + "where user_code = :userCode) "
			+ "where cs_code = cs_code", nativeQuery = true)
	public Achievement duplicatedAchievement(long userCode, long csCode);
}
