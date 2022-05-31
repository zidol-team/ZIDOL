package com.zidol.fc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zidol.fc.domain.CS;
import com.zidol.fc.service.CSService;

@RestController
public class CSController {
	
	@Autowired
	CSService csService;

	@GetMapping
	public Map<String, List<CS>> findByCsType(@RequestBody Map<String, String> param) {
		Map<String, List<CS>> result = new HashMap<>();
		result.put("CS", csService.findByCsType(param.get("csType")));
		return result;
	}
}
