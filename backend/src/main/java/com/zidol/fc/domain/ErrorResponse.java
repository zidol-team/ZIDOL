package com.zidol.fc.domain;

import lombok.Data;

@Data
public class ErrorResponse {
	// http 상태 코드
	private int status;
	
	// 오류 메시지
	private String message;
	
	// 
	private String code;

}
