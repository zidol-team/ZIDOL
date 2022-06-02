package com.zidol.fc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.CS;
import com.zidol.fc.repository.CSRepository;

@Service
public class CSService {
	
	@Autowired
	CSRepository csRepository;
	
	public List<CS> findAll() {
		return csRepository.findAll();
	}
	
	public CS findByCsName(String csName) {
		return csRepository.findByCsName(csName);
	}

}
