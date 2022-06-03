package com.zidol.fc.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorController {

	@ExceptionHandler(BindException.class)
	public ResponseEntity<ErrorResponse> handleUnexpectedTypeException(BindException e) {
		BindingResult bindingResult = e.getBindingResult();
		ErrorCode errorCode = ErrorCode.INVALID_PARAM;
		ErrorResponse errorResponse = ErrorResponse.create().status(errorCode.getStatus()).code(errorCode.getCode())
				.errors(bindingResult).message(e.getMessage());

		return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.resolve(errorCode.getStatus()));
	}
	
	@ExceptionHandler(CustomException.class)
	public ResponseEntity<ErrorResponse> handleCustomException(CustomException e) {
		ErrorCode errorCode = e.getErrorCode();
		ErrorResponse errorResponse = ErrorResponse.create().status(errorCode.getStatus()).code(errorCode.getCode())
				.error(e.getCustomFieldError()).message(e.toString());

		return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.resolve(errorCode.getStatus()));
	}
}
