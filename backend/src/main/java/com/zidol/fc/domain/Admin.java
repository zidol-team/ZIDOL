package com.zidol.fc.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long adminCode;
	
	@NotNull
	private String adminEmail;

	@Builder
	public Admin(Long adminCode, @NotNull String adminEmail) {
		super();
		this.adminCode = adminCode;
		this.adminEmail = adminEmail;
	}
	
}
