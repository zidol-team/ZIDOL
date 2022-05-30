package com.zidol.fc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zidol.fc.domain.Admin;

public interface AdminRepository extends JpaRepository<Long, Admin> {

}
