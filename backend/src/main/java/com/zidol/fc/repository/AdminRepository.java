package com.zidol.fc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zidol.fc.domain.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Long, Admin> {

}
