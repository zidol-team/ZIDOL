package com.zidol.fc.error.board;

import java.io.Serial;

import com.zidol.fc.error.CustomException;
import com.zidol.fc.error.ErrorCode;
import com.zidol.fc.error.ErrorResponse;

public class UpdateByUnauthUserException extends CustomException {

	@Serial
	private static final long serialVersionUID = 52660775616462902L;
	
	public UpdateByUnauthUserException(ErrorResponse.CustomFieldError customFieldError) {
		super(ErrorCode.UPDATE_BY_UNAUTH_USER, customFieldError);
	}

}
