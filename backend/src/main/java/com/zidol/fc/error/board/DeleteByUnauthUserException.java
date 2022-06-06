package com.zidol.fc.error.board;

import java.io.Serial;

import com.zidol.fc.error.CustomException;
import com.zidol.fc.error.ErrorCode;
import com.zidol.fc.error.ErrorResponse;

public class DeleteByUnauthUserException extends CustomException {

	@Serial
	private static final long serialVersionUID = -5714783431556306812L;
	
	public DeleteByUnauthUserException(ErrorResponse.CustomFieldError customFieldError) {
		super(ErrorCode.DELETE_BY_UNAUTH_USER, customFieldError);
	}

}
