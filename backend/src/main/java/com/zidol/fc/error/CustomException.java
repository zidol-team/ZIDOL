package com.zidol.fc.error;

import java.io.Serial;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CustomException extends RuntimeException{
	@Serial
	private static final long serialVersionUID = 1L;
	
	private ErrorCode errorCode;
	private ErrorResponse.CustomFieldError customFieldError;
	
	public CustomException(ErrorCode errorCode, ErrorResponse.CustomFieldError customFieldError) {
		super(errorCode.getCode());
		this.errorCode = errorCode;
		this.customFieldError = customFieldError;
	}
	
}
