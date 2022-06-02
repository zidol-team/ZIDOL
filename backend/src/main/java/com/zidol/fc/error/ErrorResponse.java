package com.zidol.fc.error;

import java.util.ArrayList;
import java.util.List;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
public class ErrorResponse {
	// http 상태 코드
	private int status;

	// 오류 메시지
	private String code;

	private String message;

	// 에러가 발생한 필드 명
	private List<CustomFieldError> fieldErrors;

	static public ErrorResponse create() {
		return new ErrorResponse();
	}

	public ErrorResponse status(int status) {
		this.status = status;
		return this;
	}

	public ErrorResponse code(String code) {
		this.code = code;
		return this;
	}

	public ErrorResponse message(String message) {
		this.message = message;
		return this;
	}

	public ErrorResponse error(CustomFieldError error) {
		setFieldError(error);
		return this;
	}

	public ErrorResponse errors(BindingResult errors) {
		setFieldErrors(errors.getFieldErrors());
		return this;
	}

	// 하나일 경우
	public void setFieldError(CustomFieldError customFieldError) {
		this.fieldErrors = new ArrayList<>();
		this.fieldErrors.add(customFieldError);
	}

	// 여러 필드일 경우
	public void setFieldErrors(List<FieldError> fieldErrors) {
		this.fieldErrors = new ArrayList<>();
		fieldErrors.forEach(error -> {
			this.fieldErrors.add(
					new CustomFieldError(error.getCodes()[0], error.getRejectedValue(), error.getDefaultMessage()));
		});
	}

	@Getter
	@AllArgsConstructor
	public static class CustomFieldError {
		private String field;
		private Object value;
		private String message;
	}

}
