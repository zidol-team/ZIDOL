package com.zidol.fc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zidol.fc.domain.Reply;

@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long>{
	
}
