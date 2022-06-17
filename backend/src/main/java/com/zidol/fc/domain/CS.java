package com.zidol.fc.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
public class CS implements Serializable{
	
	@OneToOne(mappedBy = "cs")
	@JsonManagedReference(value = "cs-content")
	private CSContent csContent;
	
	@OneToMany(mappedBy = "cs")
	@JsonManagedReference(value = "cs")
	private List<Achievement> users;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long csCode;
	
	@NotNull
	@Column
	private String csType;
	
	@NotNull
	@Column
	private String csName;

	@Builder
	public CS(CSContent csContent, List<Achievement> users, long csCode, @NotNull String csType,
			@NotNull String csName) {
		super();
		this.csContent = csContent;
		this.users = users;
		this.csCode = csCode;
		this.csType = csType;
		this.csName = csName;
	}
	
}