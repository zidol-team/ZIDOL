package com.zidol.fc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.zidol.fc.domain.CS;
import com.zidol.fc.domain.Temp;

@Repository
public interface CSRepository extends JpaRepository<CS, Long> {

	public CS findByCsCode(long csCode);
	
	public int countByCsType(String csType);
	
	@Query(value = "select A.cs_code csCode, A.cs_name csName, B.cs_content csContent, B.cs_regdate csRegdate "
				 + "from cs A "
				 + "join cscontent B "
				 + "on A.cs_code = B.cs_code " , nativeQuery = true)
	public List<Temp> findAllAdminCS();
	
}
