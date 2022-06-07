package com.zidol.fc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zidol.fc.domain.CS;
import com.zidol.fc.domain.CSContent;

public interface CSContentRepository extends JpaRepository<CSContent, Long> {
	
	public CSContent findByCs(CS cs);

}
