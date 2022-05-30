package com.zidol.fc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zidol.fc.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
