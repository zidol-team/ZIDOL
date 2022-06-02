package com.zidol.fc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zidol.fc.domain.User;
import com.zidol.fc.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public User findByUserEmail(String userEmail) {
		return userRepository.findByUserEmail(userEmail);
	}
	
	public User insertUser(User user) {
		return userRepository.save(user);
	}
}
