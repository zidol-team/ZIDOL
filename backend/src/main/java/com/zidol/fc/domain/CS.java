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
public class CS {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long csCode;
	
	@NotNull
	private String csType;
	
	@NotNull
	private String csName;

	@NotNull
	private Boolean csSuccess;

	@Builder
	public CS(long csCode, String csType, String csName, Boolean csSuccess) {
		super();
		this.csCode = csCode;
		this.csType = csType;
		this.csName = csName;
		this.csSuccess = csSuccess;
	}
	
}