package com.zidol.fc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zidol.fc.domain.User;

public interface UserRepository extends JpaRepository<Long, User> {

}
