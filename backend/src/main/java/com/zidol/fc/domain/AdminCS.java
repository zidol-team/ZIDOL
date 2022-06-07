package com.zidol.fc.domain;

import java.time.LocalDate;

public interface AdminCS {
	
	long getCsCode();
	String getCsName();
	String getCsContent();
	LocalDate getCsRegdate();
	
}
