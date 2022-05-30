package com.zidol.fc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zidol.fc.domain.CS;

@Repository
public interface CSRepository extends JpaRepository<CS, Long> {

}
