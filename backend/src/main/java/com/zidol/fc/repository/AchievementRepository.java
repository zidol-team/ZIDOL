package com.zidol.fc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.zidol.fc.domain.Achievement;
import com.zidol.fc.domain.User;

public interface AchievementRepository extends JpaRepository<Achievement, Long> {
	
	public List<Achievement> findByUser(User user);
	
	@Query(value = "select * "
			+ "from (select * "
				  + "from achievement A "
				  + "where A.user_code = :userCode) B "
			+ "where B.cs_code = :csCode", nativeQuery = true)
	public Achievement duplicatedAchievement(@Param("userCode") long userCode, @Param("csCode") long csCode);
}
