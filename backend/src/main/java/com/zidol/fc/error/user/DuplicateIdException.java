package com.zidol.fc.error.user;

import java.io.Serial;

import com.zidol.fc.error.CustomException;
import com.zidol.fc.error.ErrorCode;
import com.zidol.fc.error.ErrorResponse;

public class DuplicateIdException extends CustomException{
	
	@Serial
	private static final long serialVersionUID = -8749460605149935193L;
	
	public DuplicateIdException(ErrorResponse.CustomFieldError customFieldError) {
		super(ErrorCode.DUPLICATED_ID, customFieldError);
	}
}
