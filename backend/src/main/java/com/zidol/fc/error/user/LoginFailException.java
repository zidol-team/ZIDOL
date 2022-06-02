package com.zidol.fc.error.user;

import java.io.Serial;

import com.zidol.fc.error.CustomException;
import com.zidol.fc.error.ErrorCode;
import com.zidol.fc.error.ErrorResponse;

public class LoginFailException extends CustomException {
	@Serial
	private static final long serialVersionUID = 5368542779082070930L;
	
	public LoginFailException(ErrorResponse.CustomFieldError customFieldError) {
		super(ErrorCode.LOGIN_FAILED, customFieldError);
	}
}
