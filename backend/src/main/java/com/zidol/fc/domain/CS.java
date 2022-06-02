package com.zidol.fc.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
	
	@OneToMany(mappedBy = "cs")
	private List<Achievement> users;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long csCode;
	
	@NotNull
	private String csType;
	
	@NotNull
	private String csName;

	@Builder
	public CS(long csCode, String csType, String csName) {
		super();
		this.csCode = csCode;
		this.csType = csType;
		this.csName = csName;
	}
	
}