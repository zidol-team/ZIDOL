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
	
	public List<CS> findByCsType(String csType) {
		return csRepository.findByCsType(csType);
	}
	
	public List<CS> findAllCS() {
		return csRepository.findAll();
	}

}
