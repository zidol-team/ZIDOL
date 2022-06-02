package com.zidol.fc.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
	@JsonManagedReference
	private List<Achievement> users;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long csCode;
	
	@NotNull
	private String csType;
	
	@NotNull
	private String csName;

	@Builder
	public CS(List<Achievement> users, long csCode, @NotNull String csType, @NotNull String csName) {
		super();
		this.users = users;
		this.csCode = csCode;
		this.csType = csType;
		this.csName = csName;
	}
	
}