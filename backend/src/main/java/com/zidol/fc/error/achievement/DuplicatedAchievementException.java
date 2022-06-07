package com.zidol.fc.error.achievement;

import java.io.Serial;

import com.zidol.fc.error.CustomException;
import com.zidol.fc.error.ErrorCode;
import com.zidol.fc.error.ErrorResponse;

public class DuplicatedAchievementException extends CustomException{

	@Serial
	private static final long serialVersionUID = 2326312493349600631L;
	
	public DuplicatedAchievementException(ErrorResponse.CustomFieldError customFieldError) {
		super(ErrorCode.DUPLICATED_ACHIEVEMENT, customFieldError);
	}

}
